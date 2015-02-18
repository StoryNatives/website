module.exports = function(grunt) {


    var ftp_config = grunt.file.readJSON('ftp_config.json');
    console.log(ftp_config);

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
        },

        ftp_push: {
            your_target: {
                options: ftp_config.options,
                files: [
                    {
                        expand: true,
                        cwd: 'wp-content/themes/storynatives',
                        src: [
                            "**"
                        ]
                    }
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-push');

    // Default task(s).
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('dev', ['compass', 'watch']);

};