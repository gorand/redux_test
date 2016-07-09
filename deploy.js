
var ghPages = require('gh-pages');
var path = require('path');

var config = {
  message: 'Redux Note App'
};

ghPages.publish(path.join(__dirname, '/', 'dist'), config, function(err) {
  if (err) { console.log(err); }
  console.log('Successfully Deployed to Github Pages'.green.bold);
});
