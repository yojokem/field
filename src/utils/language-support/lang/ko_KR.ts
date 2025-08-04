import { Language } from "../../../data/entity/sections/Language";

export class ko_KR extends Language {
    constructor() {
        super("Korean", "ko");
        this.country = "KR";
    }
    // initialize - load(file→server) | fetch(db→server) - upload(file→db) |

    public load() {

    }

    public async fetch() {

    }


}