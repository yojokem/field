"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const _index_1 = require("./.index");
const _page_1 = require("./.page");
exports.auth = new _index_1.RouteModel("Auth", "/auth");
exports.auth.setLocal("title", "Field ∥ 0Auth0");
exports.auth.setLocal("access", 0);
exports.auth.setLocal("enregister", 0);
let p = exports.auth.router;
const PageUser_Auth = new _page_1.Page("Field ∥ Auth", 'user/auth');
PageUser_Auth.pass(p);
p.get("/", (req, res) => {
    res.render(PageUser_Auth.path);
});
p.get("/access", (req, res) => {
    res.locals["access"] = true;
    res.locals["enregister"] = false;
    res.render(PageUser_Auth.path);
});
p.get("/enregister", (req, res) => {
    res.locals["access"] = false;
    res.locals["enregister"] = true;
    res.render(PageUser_Auth.path);
});
