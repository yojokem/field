"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = void 0;
const RouteModel = require("./.index");
const Page = require("./.page");
const auth = new RouteModel("Auth", "/auth");
auth.setLocal("title", "Field ∥ 0Auth0");
auth.setLocal("access", 0);
auth.setLocal("enregister", 0);
exports.p = auth.router;
const PageUser_Auth = new Page("Field ∥ Auth", 'user/auth');
PageUser_Auth.pass(exports.p);
exports.p.get("/", (req, res) => {
    res.render(PageUser_Auth.path);
});
exports.p.get("/access", (req, res) => {
    res.locals["access"] = true;
    res.locals["enregister"] = false;
    res.render(PageUser_Auth.path);
});
exports.p.get("/enregister", (req, res) => {
    res.locals["access"] = false;
    res.locals["enregister"] = true;
    res.render(PageUser_Auth.path);
});
