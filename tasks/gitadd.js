/*
 * grunt-gitadd
 * https://github.com/davemedema/grunt-gitadd
 *
 * Copyright (c) 2013 Dave Medema
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('gitadd', 'Add all file contents to the index.', function() {
    var shell = require('shelljs');

    if (shell.exec('git add .', { silent: true }).code === 0) {
      grunt.log.writeln('All files added to the index.');
    }
  });

};
