/**
 * A task to parse our data from the homeless deaths
 * project, taking it as it's exported from Django
 * and readying it for our map app.
 */
module.exports = function(grunt) {
  grunt.task.registerTask('processdata', 'Process our data.', function() {
    var inFile = 'src/data/data.json';

    var input = grunt.file.readJSON(inFile);

    //var output = input.map(cleanData(false)),

    grunt.file.write('public/data.json', JSON.stringify(input));
    grunt.log.oklns("Processed " + inFile + " and saved it to public/data.json.");
  });
};