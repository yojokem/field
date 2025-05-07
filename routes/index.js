const RouteModel = require("./.index");

const defaultIndex = new RouteModel("Default", "/");

defaultIndex.setLocal("title", "FIELD");

let p = defaultIndex.router;
p.get("/", (req, res) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render('ground');
});

p.get("/auth", (req, res) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render('user/auth');
});

new RouteModel("Default", "/");
new RouteModel("Default", "/");
new RouteModel("Default", "/");

module.exports = [
    defaultIndex
];