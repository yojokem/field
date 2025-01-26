const models = [];
const pathRegExp = /(\/[^\s]*)?$/i;

class Page {
    title = '';
    _path = '';

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
}

module.exports = Page;