var getCurrentPlatform = function() {
	var platform, arch;

	switch (process.platform) {
		case 'darwin':
			platform = 'mac';
			break;

		case 'win32':
			platform = 'win';
			break;

		case 'linux':
			platform = 'linux';
			break;

		default:
			return false;
	}

	switch (process.arch) {
		case 'ia32':
			arch = '32';
			break;

		case 'x64':
			arch = '64';
			break;

		default:
			return false;
	}

	return platform + arch;
};

module.exports = function(grunt) {
	"use strict";
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		less: {
			development: {
				files: {
					'app/styles/css/zircon.css': 'app/styles/less/main.less'
				}
			}
		},
		react: {
			files: {
				expand: true,
				cwd: 'app/templates/jsx/',
				src: ['**/*.jsx'],
				dest: 'app/templates/js/',
				ext: '.js'
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'app/scripts/js/**/*.js', 'app/templates/js/**/*.js']
		},
		nodewebkit: {
			options: {
				platforms: [getCurrentPlatform()]
			},
			src: [
				'app/**/*',
				'package.json',
				'README.md',
				'node_modules/irc/**',
				'node_modules/i18n/**',
				'node_modules/dateformat/**'
			]
		},
	});

	grunt.registerTask('default', ['bower_clean', 'less', 'react', 'jshint', 'nodewebkit']);
};
