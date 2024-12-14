const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

/**
 * View Engines
 */

app.set('views', path.join(__dirname, "views"))

/**
 * Middleware Lineages
 */

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

/* ******************* */

app.listen(80, () => {
    console.log("is now running");
})