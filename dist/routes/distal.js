"use strict";
/**
 * For Public Indication on the View(s).
 */
const RouteModel = require("./.index");
const Distal = new RouteModel("Distal", "/");
let p = defaultIndex.router;
p.get("/", (req, res) => res.render('ground'));
module.exports = [
    defaultIndex
];
