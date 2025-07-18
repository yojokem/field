import { Request, Response } from 'express';
import { RouteModel } from './.index';
import { Page } from './.page';

const defaultIndex = new RouteModel("Default", "/");
defaultIndex.setLocal("title", "FIELD");

let p = defaultIndex.router;

const PageGround = new Page("Field ∥ set-ground", 'ground');
PageGround.pass(p)
p.get("/", (req: Request, res: Response) => {
    defaultIndex.setLocal("b", "dwa");  //res.locals.b = "c";
    res.render(PageGround.path);
});
// 의문점: root에 Page의 middlewares를 적용하면, 이게 root-related relative link에도 적용되는 middlewares가 될 것인가?
//new RouteModel("Default", "/")

// Load
import * as auth from './auth';

export const LISTS: Array<RouteModel> = [defaultIndex, auth.auth];