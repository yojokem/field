import { Request, Response } from 'express';
import { RouteModel } from './.index';
import { Page } from './.page';

export const admin = new RouteModel("Admin 1", "/admin");

admin.setLocal("title", "Field ∥ 0Admin0");

let p = admin.router;

const PageUser_Admin_ = new Page("Field ∥ Auth", 'user/?');
PageUser_Auth.pass(p);

p.get("/", (req: Request, res: Response) => {
    res.locals['access'] = false;
    res.locals['enregister'] = false;
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