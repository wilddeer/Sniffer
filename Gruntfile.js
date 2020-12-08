/*global module */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n * Sniffer is a clientside browser/engine/os/device detection tool\n * v. <%= pkg.version %> | <%= pkg.homepage %>\n * Copyright <%= pkg.author.name %> | <%= pkg.author.url %>\n *\n * MIT License\n */\n',

        clean: ['dist'],
        concat: {
            'pure': {
                options: {
                    banner: '<%= banner %>'
                },
                src: ['src/sniffer.js'],
                dest: 'dist/sniffer.pure.js',
            },
            'module': {
                src: [
                    'src/sniffer.js',
                    'src/expose.js'
                ],
                dest: 'dist/sniffer.module.js',
            },
            'default': {
                src: [
                    'src/sniffer.js',
                    'src/run.js'
                ],
                dest: 'dist/sniffer.js',
            }
        },

        wrap: {
            options: {
                wrapper: ['<%= banner %>\n;(function(global) {\n\'use strict\';\n', '})(this);'],
                indent: '    '
            },
            'module': {
                src: [
                    'dist/sniffer.module.js'
                ],
                dest: 'dist/sniffer.module.js'
            },
            'default': {
                src: [
                    'dist/sniffer.js'
                ],
                dest: 'dist/sniffer.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            'dist': {
                files: [{
                    expand: true,
                    src: '*.js',
                    dest: 'dist/min',
                    cwd: 'dist',
                    rename: function(dest, src) { return dest + '/' + src.replace('.js', '.min.js'); }
                }]
            },
        },

        connect: {
            server: {
                options: {
                    port: 8001,
                    hostname: '*'
                }
            }
        },

        watch: {
            js: {
                files: ['src/*.js', 'package.json'],
                tasks: ['build'],
            }
        }
    });

    // build
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-wrap');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('build', ['clean', 'concat', 'wrap', 'uglify']);
    grunt.registerTask('w', ['build', 'connect', 'watch']);
    grunt.registerTask('default', 'build');
};
