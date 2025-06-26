"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const getParams = require("../utils/params");
const pages = [];
const pathRegExp = /(\/[^\s]*)?$/u;
const fileRegExp = /(\/[^\s]*)?((\.)[\w]+){1}$/u;
class Page {
    constructor(title, path) {
        this.title = '';
        this._path = '';
        this._middlewares = [];
        this.title = title;
        this.path = path;
        pages.push(this);
        console.log(`Page 〈${this.path}〉 '${this.title}' is defined.`);
        let local = this;
        this.addMiddleware((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.locals['title'] = local.title;
            next();
        }));
    }
    get path() {
        return this._path;
    }
    set path(path) {
        if (pathRegExp.test(path))
            this._path = path;
        else
            throw new Error(`Page ${this.title} could not be destined for invalid path: ${path}`);
    }
    get middlewares() {
        return Array.from(this._middlewares);
    }
    /**
     * @param {RequestHandler} middleware
     */
    addMiddleware(middleware) {
        if (typeof middleware !== 'function')
            throw new Error(`Page ${this.title} could not handle the given middleware: ${String(middleware)}`);
        if (Page.checkMiddlewareParameters(middleware))
            this._middlewares.push(middleware);
        else
            throw new Error(``);
    }
    /**
     * @param {RequestHandler} middleware
     */
    removeMiddleware(middleware) {
        if (typeof middleware !== 'function')
            throw new Error(`Page ${this.title} could not handle the given middleware: ${String(middleware)}`);
        let index = this._middlewares.indexOf(middleware);
        if (index < 0)
            throw new Error(``);
        this._middlewares = this.middlewares.filter(x => x !== middleware);
    }
    /**
     *
     * @param {Router} router
     */
    pass(router) {
        return __awaiter(this, void 0, void 0, function* () {
            let middlewares = this.middlewares;
            middlewares.forEach(x => router.use(x));
        });
    }
    /**
     * Check the singularity of the name for a Page.
     * @param {String} path the path of a Page
     * @returns whether there is no same name in the registered pages.
     */
    static checkSingularity(path) {
        return pages.filter(x => x.path == path.trim()).length <= 0;
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
    static checkMiddlewareParameters(mw) {
        let params = getParams(mw);
        let normal = ['req', 'res', 'next'];
        let errors = ['err', 'req', 'res', 'next'];
        return !(params.filter(x => !normal.includes(x)).length > 0 || params.filter(x => !errors.includes(x)).length > 0);
    }
}
exports.Page = Page;
