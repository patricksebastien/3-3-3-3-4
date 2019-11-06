var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8');
var options = {
    format: "Letter",
    orientation: "portrait",
    base: "file:///home/psc/Code/jamcards/"
};

pdf.create(html, options).toFile('./jam2.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});