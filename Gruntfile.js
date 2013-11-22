/*
 * grunt-gitadd
 * https://github.com/davemedema/grunt-gitadd
 *
 * Copyright (c) 2013 Dave Medema
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // ---
  // Configuration

  grunt.initConfig({

    // package.json
    pkg: grunt.file.readJSON('package.json'),

    // `bumpup`
    bumpup: {
      options: {
        updateProps: {
          pkg: 'package.json'
        }
      },
      file: 'package.json'
    },

    // `jshint`
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    // `nodeunit`
    nodeunit: {
      tests: ['test/*_test.js']
    },

    // `tagrelease`
    tagrelease: {
      file: 'package.json'
    }

  });

  // ---
  // Load tasks

  grunt.loadTasks('tasks');

  // ---
  // npm tasks

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // ---
  // Task aliases

  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('test', ['nodeunit']);

  grunt.registerTask('release', function(type) {
    grunt.task.run('bumpup:' + (type || 'patch'));
    grunt.task.run('gitadd');
    grunt.task.run('tagrelease');
  });

};
