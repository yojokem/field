const RouteModel = require("./.index");

const defaultIndex = new RouteModel("Default", "/");

let p = defaultIndex.router;
p.get("/", (req, res) => res.render('ground'));

module.exports = [
    defaultIndex
];