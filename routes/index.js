const RouteModel = require("./.index");

const defaultIndex = new RouteModel("Default", "/");

defaultIndex.setLocal("title", "FIELD");

let p = defaultIndex.router;
p.get("/", (req, res) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render('ground');
});

new RouteModel("Default", "/");
new RouteModel("Default", "/");
new RouteModel("Default", "/");

module.exports = [
    defaultIndex
];