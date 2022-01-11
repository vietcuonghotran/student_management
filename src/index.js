const path = require('path');
const express = require('express');
var methodOverride = require('method-override')
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const route = require('./routes');
const db = require('./config/db');
const session = require("express-session");
const passport = require('./../auth/passport')
// Conect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.engine('hbs', handlebars({extname: ".hbs"}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views',));

// app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})