const RouteModel = require("./.index");
const Page = require("./.page");

const auth = new RouteModel("Auth", "/auth");

auth.setLocal("title", "Field ∥ 0Auth0");

let p = auth.router;

const PageUser_Auth = new Page("Field ∥ Auth", 'user/auth');
PageUser_Auth.pass(p);

p.get("/", (req, res) => {
    res.render(PageUser_Auth.path);
});

p.get("/auth", (req, res) => {
    
});

module.exports = auth;