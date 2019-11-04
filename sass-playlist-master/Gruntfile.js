module.exports = function(grunt){
    //configuration
    grunt.initConfig({
        watch:{
            sass:{
                files: ['scss/*.scss'],
                tasks: ['sass']
            }
        },
        sass:{
            build:{
                files:{
                    'css/styles.css': 'scss/styles.scss'
                }
            }
        }
    });
    //load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //register tasks
}