var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  var baseDir = path.dirname(process.cwd());

  fs.readdir(baseDir, function(err, files) {
	if (err) {
	  console.error(err);
	} else {
	  res.render('index', { 
		files: files
	  });
	}
  });
});

module.exports = router;
