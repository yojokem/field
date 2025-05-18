const RouteModel = require("./.index");
const Page = require("./.page");

const defaultIndex = new RouteModel("Default", "/");

defaultIndex.setLocal("title", "FIELD");

let p = defaultIndex.router;

const PageGround = new Page("Field ∥ set-ground", 'ground');
p.get("/", (req, res) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render(PageGround.path);
});
// root에 Page의 middlewares를 적용하면, 이게 root-related relative link에도 적용되는 middlewares가 될 것인가?

/*
p.get("/auth", (req, res) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render('user/auth');
});
*/

//new RouteModel("Default", "/");
//new RouteModel("Default", "/");
//new RouteModel("Default", "/");

module.exports = [
    defaultIndex,
    require("./auth")
];