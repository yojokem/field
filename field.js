const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

/**
 * View Engines
 */

app.set('views', path.join(__dirname, "views"))

/**
 * Middleware Lineages
 */

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

/* ******************* */

app.listen()