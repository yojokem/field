"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const nunjucks_1 = __importDefault(require("nunjucks"));
/* Load */
const app = (0, express_1.default)();
const PORT = process.env.PORT;
/**
 * View Engines
 */
app.set('view engine', 'html');
nunjucks_1.default.configure('views', {
    express: app,
    watch: true,
});
app.set('views', path.join(__dirname, "views"));
/**
 * Middleware Lineages
 */
switch (process.env.mode) {
    case "prod":
        app.use((0, morgan_1.default)('combined'));
        app.use((0, helmet_1.default)({
            contentSecurityPolicy: false
        }));
        break;
    default:
        app.use((0, morgan_1.default)('dev'));
        break;
}
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false
}));
app.use(express_1.default.static(path.join(__dirname, "public")));
require("./field.session")(app); //Session
/* ******************* */
/**
 * Router Registration
 */
const indexRoute = require("./routes/");
indexRoute.forEach((l) => l.apply(app));
/* ******************* */
console.info(`Field is mandatory to serve on the PORT ${PORT}`);
app.listen(PORT, () => {
    console.log(`is now running on the PORT ${PORT}`);
    console.log(`Current Running Mode: [${process.env.mode}]`);
});
