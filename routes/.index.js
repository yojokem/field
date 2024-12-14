const logger = require("morgan");
const express = require("express");

class RouteModel {
    #express = express;
    #router = this.#express.Router();
    _route = "/";

    constructor(route) {
        this._route = route;
        console.info("RouteModel defined.");
    }

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

    set route(route) {
        this._route = route;
    }

    /**
     * Apply the router to an express application instance.
     * @param {Express} application 
     */
    apply(application) {
        application.use(this._route, this.#router);
    }
}

class B extends RouteModel {
    constructor(name, route) {
        super(route);
        this.name = name;
        console.log(`RouteModel 〔${this.name}〕`);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let p = this._name;
        this._name = name;
        return this._name != p;
    }
}



a = new RouteModel();
b = new B("dd", "/route");
console.log(b.route);

module.exports = RouteModel;