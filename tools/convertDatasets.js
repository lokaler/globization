/* eslint-disable */

var json2csv = require('json2csv');
var fs = require('fs');
var fields = ['iso', 'value'];
var path = '../src/data/questionnaires/0316/';
var datasets = require(path + 'datasets.json');


datasets.forEach(function(d){
  var filename = path + 'datasets/' + d.key + ".csv";
  console.log(d.key, filename);
  writeCsv(filename, d.data);
})

var cleanDataset = datasets.map(function(d){
  d.data = []; return d;
})

fs.writeFile(path + 'datasets.json', JSON.stringify(cleanDataset, null, 2), function(err) {
  if (err) throw err;
  console.log('clean dataset saved');
});



function writeCsv(filename, data){
  json2csv({ data: data, fields: fields }, function(err, csv) {
    if (err) console.log(err);
    fs.writeFile(filename, csv, function(err) {
      if (err) throw err;
      console.log(filename, 'file saved');
    });
  });
}
