const express = require('express');
const dotenv = require('dotenv');
const studentsRouter = require('./routes/student');
const expressEjsLayouts = require('express-ejs-layouts');


// environment variable
dotenv.config();
const PORT = process.env.PORT || 4000;

// init express
const app = express();

// init json data into express
app.use( express.json() );
app.use( express.urlencoded({ extended : false }));

// init ejs
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set('layout', 'layouts/app');

    // static
    app.use(express.static('public'));

    // routes
    app.use('/student', studentsRouter);

// server listen
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})