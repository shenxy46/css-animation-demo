module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task 
            dist: { // Target 
                options: { // Target options 
                    style: 'expanded'
                },
                files: { // Dictionary of files 
                    'style/bus.css': 'style/bus.scss' // 'destination': 'source' 
                }
            }
        },
        watch: {
            files: ['style/bus.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['sass','watch']);
};
