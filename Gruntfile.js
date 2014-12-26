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
			},
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

		mustache_render: {
			options: {
				directory: "src/doc/parts",
				extension: ".md"
			},
			browser: {
				data: "src/doc/doc.json",
				template: "src/doc/browser.en.md",
				dest: "doc/browser.en.md"
			},
			os: {
				data: "src/doc/doc.json",
				template: "src/doc/os.en.md",
				dest: "doc/os.en.md"
			},
			engine: {
				data: "src/doc/doc.json",
				template: "src/doc/engine.en.md",
				dest: "doc/engine.en.md"
			},
			feature: {
				data: "src/doc/doc.json",
				template: "src/doc/feature.en.md",
				dest: "doc/feature.en.md"
			},
			browserRu: {
				data: "src/doc/doc.json",
				template: "src/doc/browser.ru.md",
				dest: "doc/browser.ru.md"
			},
			osRu: {
				data: "src/doc/doc.json",
				template: "src/doc/os.ru.md",
				dest: "doc/os.ru.md"
			},
			engineRu: {
				data: "src/doc/doc.json",
				template: "src/doc/engine.ru.md",
				dest: "doc/engine.ru.md"
			},
			featureRu: {
				data: "src/doc/doc.json",
				template: "src/doc/feature.ru.md",
				dest: "doc/feature.ru.md"
			},
			readme: {
				data: "src/doc/doc.json",
				template: "src/doc/README.md",
				dest: "README.md"
			},
		},

		watch: {
			js: {
				files: ['src/*.js', 'package.json'],
				tasks: ['build'],
			},
			docs: {
				files: ['src/doc/**'],
				tasks: ['mustache_render'],
			}
		},
	});

	// build
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mustache-render');
	grunt.registerTask('build', ['uglify', 'concat']);
	grunt.registerTask('w', ['build', 'mustache_render', 'watch']);
	grunt.registerTask('default', 'build');
};
