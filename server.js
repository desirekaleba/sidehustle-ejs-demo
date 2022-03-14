const express = require('express');
const path = require('path');


const app = express();

// set the view engine to ejs
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {

  const tagline = "Side Hustle!";
  const articles = [
      {
          title: "Using EJS",
          text: "About using EJS"
      },
      {
        title: "Using JS",
        text: "About using JS"
      },
      {
        title: "Using Python",
        text: "About using Python"
      }
  ];
  res.render('pages/index', {
    tagline,
    articles
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
