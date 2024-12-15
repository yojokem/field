const express = require("express");

const models = [];

class RouteModel {
    #express = express;
    #router = this.#express.Router();
    _route = "/";

    /**
     * Define a RouteModel with given name and routes
     * @param {String} name the name of the RouteModel
     * @param  {...String} route Array of designated routes
     */
    constructor(name, ...route) {
        this.name = name;
        this._route = route;
        console.log(`RouteModel 〔${this.name}〕`);
        console.info("RouteModel defined.");
        models.push(this);
    }

    #locals = {};

    /**
     * Get a copy of the locals in the RouteModel.
     * @returns {JSON} locals
     */
    get locals() {
        return Object.assign(this.#locals);
    }

    /**
     * Get the value in the locals with a key.
     * @param {String} key the key for the locals
     * @returns {?} the value in the locals with the given key
     */
    getLocal(key) {
        if(key in Object.keys(this.#locals))
            return this.#locals[key];
        else {
            console.error(`[ERR-SW] RouteModel 〔${this.name}〕: Key for the locals '${key}' does not exist.`);
            return null;
        }
    }

    /**
     * Get the original data and change it to the new given value with a key in the locals.
     * @param {String} key the key for the locals
     * @param {?} value the value for the popup of the data upon the key in the locals
     * @returns {?} the value before popup of the data upon the key in the locals
     */
    popupLocal(key, value) {
        let p = getLocal(key);
        locals[key] = value;
        return p;
    }

    setProximalLocal(key, value) {
        locals[key] = value;
    }

    async setDistalLocal(callback, key, value) {
        if(await callback()) {
            locals[key] = value;
        }
    }

    /**
     * @returns {express.Router}
     */
    get router() {
        return this.#router;
    }

    set router(router) {
        console.log("The alteration of router for the RouteModel is not allowed.");
        return false;
    }

    get route() {
        return this._route;
    }

    /**
     * @returns {Array<String>} designated routes
     */
    set route(route) {
        this._route = route;
    }

    /**
     * @returns {String} the name of the RouteModel
     */
    get name() {
        return this._name;
    }

    set name(name) {
        let p = this._name;
        let k = new String(name).trim();
        if(RouteModel.checkSingularity(k)) this._name = k;
        else throw new Error(`The given name for the RouteModel for ${this.route}`);
        return this._name != p;
    }

    /**
     * Apply the router to an express application instance.
     * @param {Express} application 
     */
    apply(application) {
        application.use(this._route, this.#router);
    }

    /**
     * Check the singularity of the name for a RouteModel.
     * @param {String} name the name of a RouteModel
     * @returns whether there is no same name in the registered models.
     */
    static checkSingularity(name) {
        return models.filter(x => x.name == name.trim()).length <= 0
    }

    /**
     * @returns {Array<RouteModel>} arrays of RouteModels
     */
    static registeredOnes() {
        return models;
    }
}

a = new RouteModel("#TEST", "TESTTEST");

module.exports = RouteModel;