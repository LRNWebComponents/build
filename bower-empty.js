var fs = require('fs');
var glob = require("glob-fs")({ gitignore: false });
glob.readdir('bower_components/**/*.html', function (err, files) {
if (err) return console.error(err);
  for (let index = 0; index < files.length; index++) {
    const element = files[index];
    fs.writeFile(element, ' ', (err) => {
      if (err) throw err;
      console.log(`${element} has been emptied`);
    })
  }
});
