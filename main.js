var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8');
var options = {
    format: 'Letter',
    orientation: "portrait",
    base: "file://"+process.cwd()+"/",
    zoomFactor: 0.2
}

pdf.create(html, options).toFile('./jam.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});