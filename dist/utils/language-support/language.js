"use strict";
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
var _Language_name, _Language_short;
const languages = [];
class Language {
    /**
     * Settle a Language for Utilization of the Service for the users.
     * @param {String} name
     * @param {String} short
     */
    constructor(name, short) {
        _Language_name.set(this, '');
        _Language_short.set(this, '');
        // Please not be confused with python. Though it's absolutely similar.
        this.dictionary = {};
        try {
            name = new String(name).trim();
            short = new String(short).trim();
            if (name == "" || short == "")
                throw new Error("The name or the short name has to be given for the settlement of a Language.");
            this.name = name;
            this.short = short;
            languages.push(this);
            console.info(`Language 〔${name}〕(${short}) settled.`);
        }
        catch (err) {
            console.info(`Language 〔${name}〕(${short}) could not be settled, it already settled.`);
        }
    }
    get name() {
        return __classPrivateFieldGet(this, _Language_name, "f");
    }
    set name(name) {
        let p = __classPrivateFieldGet(this, _Language_name, "f");
        let k = new String(name).trim();
        if (Language.checkSingularity(k))
            __classPrivateFieldSet(this, _Language_name, k, "f");
        else
            throw new Error(`The Language ${this.name}(${__classPrivateFieldGet(this, _Language_short, "f")}) already settled once.`);
    }
    get short() {
        return __classPrivateFieldGet(this, _Language_short, "f");
    }
    set short(short) {
        let p = __classPrivateFieldGet(this, _Language_short, "f");
        let k = new String(short).trim();
        if (Language.checkSingularityShortly(k))
            __classPrivateFieldSet(this, _Language_short, k, "f");
        else
            throw new Error(`The Language ${this.name}(${__classPrivateFieldGet(this, _Language_short, "f")}) already settled once.`);
    }
    /**
     * Check the singularity of the name for a Language.
     * @param {String} name the name of a Language
     * @returns whether there is no same name in the registered languages.
     */
    static checkSingularity(name) {
        return languages.filter(x => x.name == name.trim()).length <= 0;
    }
    static checkSingularityShortly(short) {
        return languages.filter(x => x.short == short.trim()).length <= 0;
    }
    /**
     * @returns {Array<Language>} arrays of Languages
     */
    static registeredOnes() {
        return languages;
    }
}
_Language_name = new WeakMap(), _Language_short = new WeakMap();
