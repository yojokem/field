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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _RouteModel_instances, _RouteModel_express, _RouteModel_router, _RouteModel_experimental, _RouteModel_locals, _RouteModel_inLocals, _RouteModel_done, _RouteModel_before;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModel = void 0;
const express_1 = __importDefault(require("express"));
const models = [];
class RouteModel {
    /**
     * Define a RouteModel with given name and routes
     * @param {String} name the name of the RouteModel
     * @param  {...String} route Array of designated routes
     */
    constructor(name, ...route) {
        _RouteModel_instances.add(this);
        _RouteModel_express.set(this, express_1.default);
        _RouteModel_router.set(this, __classPrivateFieldGet(this, _RouteModel_express, "f").Router());
        _RouteModel_experimental.set(this, false);
        this._route = ["/"];
        _RouteModel_locals.set(this, {});
        this.pages = [];
        _RouteModel_done.set(this, false);
        _RouteModel_before.set(this, false);
        try {
            this._name = name;
            this._route = route;
            models.push(this);
            let local = this;
            this.router.use((req, res, next) => {
                res.locals = __classPrivateFieldGet(local, _RouteModel_instances, "m", _RouteModel_inLocals).call(local);
                next();
            });
            console.info(`RouteModel 〔${name}〕[${this._route}] defined.`);
        }
        catch (_a) {
            console.error(`RouteModel 〔${name}〕[${this._route}] already exists.`);
        }
    }
    /**
     * Get a copy of the locals in the RouteModel.
     * @returns {JSON} locals
     */
    get locals() {
        return Object.assign(__classPrivateFieldGet(this, _RouteModel_locals, "f"));
    }
    /**
     * Get the value in the locals with a key.
     * @param {String} key the key for the locals
     * @returns {?} the value in the locals with the given key
     */
    getLocal(key) {
        if (Object.keys(__classPrivateFieldGet(this, _RouteModel_instances, "m", _RouteModel_inLocals).call(this)).indexOf(key) >= 0)
            return __classPrivateFieldGet(this, _RouteModel_locals, "f")[key];
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
        let p = this.getLocal(key);
        __classPrivateFieldGet(this, _RouteModel_locals, "f")[key] = value;
        return p;
    }
    /**
     *
     * @param {String} key
     * @param {?} value
     * @param  {Function} callback
     */
    setProximalLocal(key, value, callback) {
        if (callback != 0)
            value = callback(value);
        __classPrivateFieldGet(this, _RouteModel_locals, "f")[key] = value;
    }
    /**
     *
     * @param {String} key
     * @param {?} value
     */
    setLocal(key, value) {
        this.setProximalLocal(key, value, 0);
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
    setDistalLocal(callback, key, criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = yield callback();
            if (yield criteria(value))
                __classPrivateFieldGet(this, _RouteModel_locals, "f")[key] = value;
        });
    }
    /**
     * @returns {express.Router}
     */
    get router() {
        __classPrivateFieldSet(this, _RouteModel_before, true, "f");
        return __classPrivateFieldGet(this, _RouteModel_router, "f");
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
        if (RouteModel.checkSingularity(k))
            this._name = k;
        else
            throw new Error(`The given name for the RouteModel for ${this.route}`);
    }
    set experimental(tf) {
        if (__classPrivateFieldGet(this, _RouteModel_done, "f"))
            throw new Error(`The experimental setting for RouteModel 〔${this.name}〕 is already set: ${this.experimental}`);
        if (__classPrivateFieldGet(this, _RouteModel_before, "f"))
            throw new Error(`RouteModel 〔${this.name}〕 is being called from the outside.`);
        __classPrivateFieldSet(this, _RouteModel_experimental, tf, "f");
        __classPrivateFieldSet(this, _RouteModel_done, true, "f");
    }
    get experimental() {
        return __classPrivateFieldGet(this, _RouteModel_experimental, "f");
    }
    /**
     * Apply the router to an express application instance.
     * @param {Express} application
     */
    apply(application) {
        try {
            application.use(this._route, __classPrivateFieldGet(this, _RouteModel_router, "f"));
            console.info(`☆ RouteModel 〔${this.name}〕 has been installed at the server.`);
        }
        catch (error) {
            console.error(`[ERR-SW] RouteModel 〔${this.name}〕 cannot be installed at the server.`);
            console.error(error);
        }
    }
    /**
     * Check the singularity of the name for a RouteModel.
     * @param {String} name the name of a RouteModel
     * @returns whether there is no same name in the registered models.
     */
    static checkSingularity(name) {
        return models.filter(x => x.name == name.trim()).length <= 0;
    }
    /**
     * @returns {Array<RouteModel>} arrays of RouteModels
     */
    static registeredOnes() {
        return models;
    }
}
exports.RouteModel = RouteModel;
_RouteModel_express = new WeakMap(), _RouteModel_router = new WeakMap(), _RouteModel_experimental = new WeakMap(), _RouteModel_locals = new WeakMap(), _RouteModel_done = new WeakMap(), _RouteModel_before = new WeakMap(), _RouteModel_instances = new WeakSet(), _RouteModel_inLocals = function _RouteModel_inLocals() {
    return __classPrivateFieldGet(this, _RouteModel_locals, "f");
};
// a = new RouteModel("#TEST", "TESTTEST");
