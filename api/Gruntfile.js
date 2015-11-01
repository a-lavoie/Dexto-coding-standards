module.exports = function(grunt) {

  grunt.initConfig({
     run: {
       start_mocha_test: {
          exec: 'sleep 1 && cd ../tests && mocha index.js',
          options: {
             ready: 3000
          }
       }
    },


    forever: {
       test_server: {
         options: {
            index: 'index.js',
            logDir: 'logs',
            errFile: 'err.log',
            outFile: 'out.log',
            logFile: 'file.log',
         }
       },
       testo_server: {
         options: {
            index: '../tests/index.js',
            logDir: 'logs',
            errFile: 'err.log',
            outFile: 'out.log',
            logFile: 'file.log',
         }
       }

    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    mocha: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      restart_server_on_changes: {
         files: ['index.js'],
         tasks: ['forever:test_server:restart'],
         options: {
            spawn: false
         }
      },
      restart_mocha_on_changes: {
         files: ['index.js'],
         tasks: ['exec:start_mocha_test'],
         options: {
            spawn: false
         }
      },
      run_mocha_on_changes: {
         files: ['index.js'],
         tasks: ['run:start_mocha_test'],
         options: {
            spawn: false
         }
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-forever');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['watch:run_mocha_on_changes']);

};
