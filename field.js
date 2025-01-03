const path = require("path");

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const nunjucks = require("nunjucks");

/* Load */

const app = express();

/**
 * View Engines
 */

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});
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

/**
 * Router Registration
 */

const indexRoute = require("./routes/index");
indexRoute[0].apply(app);

/* ******************* */

app.listen(80, () => {
    console.log("is now running");
})