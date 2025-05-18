const getParams = require("../utils/params");

const pages = [];
const pathRegExp = /(\/[^\s]*)?$/u;
const fileRegExp = /(\/[^\s]*)?((\.)[\w]+){1}$/u;

class Page {
    title = '';
    _path = '';
    _middlewares = [];

    constructor(title, path) {
        this.title = title;
        this.path = path;
        pages.push(this);

        console.log(`Page 〈${this.path}〉 '${this.title}' is defined.`);
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
     * @param {Function} middleware 
     */
    addMiddleware(middleware) {
        if(typeof middleware !== 'function') throw new Error(`Page ${this.title} could not handle the given middleware: ${middleware.toString()}`);

        if(Page.checkMiddlewareParameters(middleware)) this._middlewares.push(middleware);
        else throw new Error(``);
    }

    /**
     * @param {Function} middleware 
     */
    removeMiddleware(middleware) {
        if(typeof middleware !== 'function') throw new Error(`Page ${this.title} could not handle the given middleware: ${middleware.toString()}`);

        index = this._middlewares.indexOf(middleware);
        if(index < 0) throw new Error(``);
        
        this._middlewares = this.middlewares.filter(x => x !== middleware);
    }

    /**
     * Check the singularity of the name for a Page.
     * @param {String} name the name of a Page
     * @returns whether there is no same name in the registered pages.
     */
    static checkSingularity(name) {
        return pages.filter(x => x.name == name.trim()).length <= 0
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
        let params = getParams(middleware);
        
        let normal = ['req', 'res', 'next'];
        let errors = ['err', 'req', 'res', 'next'];

        return !(params.filter(x => !normal.includes(x)).length > 0 || params.filter(x => !errors.includes(x)).length > 0);
    }
}

module.exports = Page;