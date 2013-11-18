/*global module */
module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n * Sniffer is a clientside browser/engine/os/device detection tool\n * v. <%= pkg.version %> | <%= pkg.homepage %>\n * Copyright <%= pkg.author.name %> | <%= pkg.author.url %>\n *\n * MIT License\n */\n',
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				files: {
					'sniffer.min.js': ['src/sniffer.js']
				}
			}
		},
		concat: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: ['src/sniffer.js'],
				dest: 'sniffer.js',
			},
		},

		watch: {
			files: ['src/*.js', 'package,json'],
			tasks: ['build'],
		},
	});

	// build
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', ['uglify', 'concat']);
	grunt.registerTask('w', ['build', 'watch']);
	grunt.registerTask('default', 'build');
};