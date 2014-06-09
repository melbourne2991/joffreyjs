module.exports = function (grunt) {
    grunt.initConfig({
        fixmyjs: {
            options: {
                indent: 'spaces',
                jshintrc: '.jshintrc'
            },
            your_target: {
                files: [{
                        src: [
                            'lib/**/*.js',
                            'modules/**/*.js',
                            'server.js',
                            'Gruntfile.js'
                        ],
                        cwd: './',
                        expand: true,
                        dest: './'
                    }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-fixmyjs');
};