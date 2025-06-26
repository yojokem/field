import {Request, Response} from 'express';

const RouteModel = require("./.index");
const Page = require("./.page");

const auth = new RouteModel("Auth", "/auth");

auth.setLocal("title", "Field ∥ 0Auth0");
auth.setLocal("access", 0);
auth.setLocal("enregister", 0);

export let p = auth.router;

const PageUser_Auth = new Page("Field ∥ Auth", 'user/auth');
PageUser_Auth.pass(p);

p.get("/", (req: Request, res: Response) => {
    res.render(PageUser_Auth.path);
});

p.get("/access", (req: Request, res: Response) => {
    res.locals["access"] = true;
    res.locals["enregister"] = false;
    res.render(PageUser_Auth.path);
})

p.get("/enregister", (req: Request, res: Response) => {
    res.locals["access"] = false;
    res.locals["enregister"] = true;
    res.render(PageUser_Auth.path);
});