import express, { Express, Router } from "express";

const models: RouteModel[] = [];

export class RouteModel {
    #express = express;
    #router: Router = this.#express.Router();
    #experimental: boolean = false;
    _name;
    _route: string[] = ["/"];

    /**
     * Define a RouteModel with given name and routes
     * @param {String} name the name of the RouteModel
     * @param  {...String} route Array of designated routes
     */
    constructor(name: string, ...route: string[]) {
        try {
            this._name = name;
            this._route = route;
            models.push(this);

            let local = this;
            this.router.use((req, res, next) => {
                res.locals = local.#inLocals();
                next();
            });
            console.info(`RouteModel 〔${name}〕[${this._route}] defined.`);
        } catch {
            console.error(`RouteModel 〔${name}〕[${this._route}] already exists.`);
        }
    }

    #locals: Record<string, unknown> = {};
    pages = [];

    /**
     * Get a copy of the locals in the RouteModel.
     * @returns {JSON} locals
     */
    get locals() {
        return Object.assign(this.#locals);
    }

    #inLocals() {
        return this.#locals;
    }

    /**
     * Get the value in the locals with a key.
     * @param {String} key the key for the locals
     * @returns {?} the value in the locals with the given key
     */
    getLocal(key: string) {
        if(Object.keys(this.#inLocals()).indexOf(key) >= 0)
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
    popupLocal(key: string, value: any) {
        let p = this.getLocal(key);
        this.#locals[key] = value;
        return p;
    }

    /**
     * 
     * @param {String} key 
     * @param {?} value 
     * @param  {Function} callback 
     */
    setProximalLocal(key: string, value: any, callback: Function) {
        value = callback(value)
        this.#locals[key] = value;
    }

    /**
     * 
     * @param {String} key 
     * @param {?} value 
     */
    setLocal(key: string, value: any) {
        this.setProximalLocal(key, value, () => {});
    }
    /* 초기 getLocal은 null, set 이후 globally applied. */

    // Scope relayed delay; 광범위하게 공시되는 실시간 데이터
    // render 이후로 미룰 수도 없고, 어떻게 하지?
    /**
     * 
     * @param {Function} callback 
     * @param {String} key 
     * @param {Function} criteria 
     */
    async setDistalLocal(callback: Function, key: string, criteria: Function) {
        let value = await callback();
        if(await criteria(value))
            this.#locals[key] = value;
    }

    /**
     * @returns {express.Router}
     */
    get router() {
        this.#before = true;
        return this.#router;
    }

    /**
     * @param {express.Router} router
     */
    set router(router) {
        console.warn("The alteration of router for the RouteModel is not allowed.");
    }

    get route() {
        return this._route;
    }

    /**
     * @param {Array<String>} route designated routes
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
    }

    #done = false;
    #before = false;

    set experimental(tf) {
        if(this.#done)
            throw new Error(`The experimental setting for RouteModel 〔${this.name}〕 is already set: ${this.experimental}`);
        
        if(this.#before)
            throw new Error(`RouteModel 〔${this.name}〕 is being called from the outside.`);

        this.#experimental = tf;
        this.#done = true;
    }

    get experimental() {
        return this.#experimental;
    }

    /**
     * Apply the router to an express application instance.
     * @param {Express} application 
     */
    apply(application: Express) {
        try {
            application.use(this._route, this.#router);   
            console.info(`☆ RouteModel 〔${this.name}〕 has been installed at the server.`); 
        } catch (error) {
            console.error(`[ERR-SW] RouteModel 〔${this.name}〕 cannot be installed at the server.`);
            console.error(error);
        }
    }

    /**
     * Check the singularity of the name for a RouteModel.
     * @param {String} name the name of a RouteModel
     * @returns whether there is no same name in the registered models.
     */
    static checkSingularity(name: string) {
        return models.filter(x => x.name == name.trim()).length <= 0
    }

    /**
     * @returns {Array<RouteModel>} arrays of RouteModels
     */
    static registeredOnes() {
        return models;
    }
}

// a = new RouteModel("#TEST", "TESTTEST");