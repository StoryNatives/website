module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'wp-content/themes/storyntives/scss',
                    cssDir: 'wp-content/themes/storyntives/css'
                }
            }
        },

        watch: {
            scripts: {
                files: ['wp-content/themes/storyntives/scss/*.scss', 'Gruntfile.js'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('dev', ['compass', 'watch']);

};