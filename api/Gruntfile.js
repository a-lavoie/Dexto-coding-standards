module.exports = function(grunt) {

  grunt.initConfig({
    test_server: {
      options: {
         index: 'index.js'
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
    watch: {
      restart_server_on_changes: {
         files: ['**/*.js'],
         tasks: ['test_server'],
         options: {
            spawn: false
         }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-forever');

  grunt.registerTask('default', ['watch:restart_server_on_changes']);

};
