const path = require("path");

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const nunjucks = require("nunjucks");

/* Load */

const app = express();
const PORT = process.env.PORT;

/**
 * View Engines
 */

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});
app.set('views', path.join(__dirname, "views"));

/**
 * Middleware Lineages
 */

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "public")));
require("./field.session")(app); //Session

/* ******************* */

/**
 * Router Registration
 */

const indexRoute = require("./routes/");
indexRoute.forEach(l => l.apply(app));

/* ******************* */

console.info(`Field is mandatory to serve on the PORT ${PORT}`);

app.listen(PORT, () => {
    console.log(`is now running on the PORT ${PORT}`);
    console.log(`Current Running Mode: [${process.env.mode}]`);
});