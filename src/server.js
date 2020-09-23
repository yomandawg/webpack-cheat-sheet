const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.get('/hello/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.get('/sample/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/sample.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function () {
  console.log('Application is running on http://localhost:3000');
});
