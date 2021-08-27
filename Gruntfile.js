/**
 * @name: Grountfile
 * @author: 72079750
 * @date: 2021/7/20 16:24
 * @description：Grountfile
 * @update: 2021/7/20 16:24
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    version: {
      json: {
        src: ['package.json']
      },

      css: {
        options: {
          prefix: 'Version[:=]\\s*'
        },
        src: ['css/atom.css', 'scss/atom.scss', 'less/atom.less']
      }

    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')()
        ]
      },
      dist: {
        src: 'css/*.css'
        // dest: 'css/*.css',
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourceMap: false
        },
        files: {
          'css/atom.css': 'scss/atom.scss'
        }
      }
    },

    less: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/atom.css': 'less/atom.less'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/atom-min.css': ['css/atom.css']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      reload: {
        files: ['*.html', 'css/*.css'],
        options: {
          spawn: false
        }
      },

      scss: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false
        }
      },

      less: {
        files: ['less/**/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          spawn: false
        }
      },

      version: {
        files: ['package.json'],
        tasks: ['version'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          livereload: true,
          hostname: '0.0.0.0',
          port: 8000,
          base: './'
        }
      }
    }

  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('sassTasks', ['sass', 'postcss'])
  grunt.registerTask('postcss:prefix', ['postcss'])
  grunt.registerTask('default', ['connect', 'watch'])
}
