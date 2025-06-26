import { Router, Request, Response, RequestHandler, NextFunction } from "express";
const getParams = require("../utils/params");

const pages: Page[] = [];
const pathRegExp = /(\/[^\s]*)?$/u;
const fileRegExp = /(\/[^\s]*)?((\.)[\w]+){1}$/u;

export class Page {
    title = '';
    _path = '';
    _middlewares: RequestHandler[] = [];

    constructor(title: string, path: string) {
        this.title = title;
        this.path = path;
        pages.push(this);

        console.log(`Page 〈${this.path}〉 '${this.title}' is defined.`);

        let local = this;
        this.addMiddleware(async (req: Request, res: Response, next: NextFunction) => {
            res.locals['title'] = local.title;
            next();
        });
    }

    get path() {
        return this._path;
    }

    set path(path) {
        if(pathRegExp.test(path)) this._path = path
        else throw new Error(`Page ${this.title} could not be destined for invalid path: ${path}`);
    }

    get middlewares() {
        return Array.from(this._middlewares);
    }

    /**
     * @param {RequestHandler} middleware 
     */
    addMiddleware(middleware: RequestHandler) {
        if(typeof middleware !== 'function') throw new Error(`Page ${this.title} could not handle the given middleware: ${String(middleware)}`);

        if(Page.checkMiddlewareParameters(middleware)) this._middlewares.push(middleware);
        else throw new Error(``);
    }

    /**
     * @param {RequestHandler} middleware 
     */
    removeMiddleware(middleware: RequestHandler) {
        if(typeof middleware !== 'function') throw new Error(`Page ${this.title} could not handle the given middleware: ${String(middleware)}`);

        let index = this._middlewares.indexOf(middleware);
        if(index < 0) throw new Error(``);
        
        this._middlewares = this.middlewares.filter(x => x !== middleware);
    }

    /**
     * 
     * @param {Router} router 
     */
    async pass(router: Router) {
        let middlewares = this.middlewares;
        middlewares.forEach(x => router.use(x));
    }

    /**
     * Check the singularity of the name for a Page.
     * @param {String} path the path of a Page
     * @returns whether there is no same name in the registered pages.
     */
    static checkSingularity(path: string) {
        return pages.filter(x => x.path == path.trim()).length <= 0
    }

    /**
     * @returns {Array<Page>} arrays of Pages
     */
    static registeredOnes() {
        return pages;
    }

    /**
     * @param {Function} mw middleware
     */
    static checkMiddlewareParameters(mw: Function) {
        let params: string[] = getParams(mw);
        
        let normal = ['req', 'res', 'next'];
        let errors = ['err', 'req', 'res', 'next'];

        return !(params.filter(x => !normal.includes(x)).length > 0 || params.filter(x => !errors.includes(x)).length > 0);
    }
}