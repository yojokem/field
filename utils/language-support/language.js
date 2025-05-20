const languages = [];

class Language {
    #name = '';
    #short = '';

    // Please not be confused with python. Though it's absolutely similar.
    dictionary = {}

    /**
     * Settle a Language for Utilization of the Service for the users.
     * @param {String} name 
     * @param {String} short 
     */
    constructor(name, short) {
        try {
            name = new String(name).trim();
            short = new String(short).trim();

            if(name == "" || short == "")
                throw new Error("The name or the short name has to be given for the settlement of a Language.");

            this.name = name;
            this.short = short;
            languages.push(this);
            console.info(`Language 〔${name}〕(${short}) settled.`);
        } catch (err) {
            console.info(`Language 〔${name}〕(${short}) could not be settled, it already settled.`);
        }
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        let p = this.#name;
        let k = new String(name).trim();
        if(Language.checkSingularity(k)) this.#name = k;
        else throw new Error(`The Language ${this.name}(${this.#short}) already settled once.`);
        return this.#name != p;
    }

    get short() {
        return this.#short;
    }

    set short(short) {
        let p = this.#short;
        let k = new String(short).trim();
        if(Language.checkSingularityShortly(k)) this.#short = k;
        else throw new Error(`The Language ${this.name}(${this.#short}) already settled once.`);
        return this.#short != p;
    }

    /**
     * Check the singularity of the name for a Language.
     * @param {String} name the name of a Language
     * @returns whether there is no same name in the registered languages.
     */
    static checkSingularity(name) {
        return languages.filter(x => x.name == name.trim()).length <= 0
    }

    static checkSingularityShortly(short) {
        return languages.filter(x => x.short == short.trim()).length <= 0
    }

    /**
     * @returns {Array<Language>} arrays of Languages
     */
    static registeredOnes() {
        return languages;
    }
}