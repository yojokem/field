const getParams = require("../utils/params");

const models = [];
const pathRegExp = /(\/[^\s]*)?$/i;

class Page {
    title = '';
    _path = '';
    _middlewares = [];

    constructor(title, path) {
        this.title = title;
        console.log(`Page 〈${this.path}〉 '${this.title}' is being initialized.`);

        this.path = path;
        
        models.push(this);
        console.info(`Page '${this.title}' defined.`);
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
        if(typeof middleware !== 'function') throw new Error(`Page ${this.title} could not handle the `);

        if(Page.checkMiddlewareParameters(middleware)) this._middlewares.push(middleware);
        else throw new Error(``);
    }

    /**
     * Check the singularity of the name for a Page.
     * @param {String} name the name of a Page
     * @returns whether there is no same name in the registered models.
     */
    static checkSingularity(name) {
        return models.filter(x => x.name == name.trim()).length <= 0
    }

    /**
     * @returns {Array<Page>} arrays of Pages
     */
    static registeredOnes() {
        return models;
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