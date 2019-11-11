// ./path/to/module-exporting-a-function.js
var sass = require('node-sass');
var path = require('path');

// append data to file

module.exports = function processSass(data, filename) {
	console.log(data, filename);
	var result;
	result = sass.renderSync({
		data: data,
		file: filename,
	}).css;
	// addCss();
	return result.toString('utf8');
};
