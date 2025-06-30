"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocate = allocate;
const express_session_1 = __importDefault(require("express-session"));
const session_file_store_1 = __importDefault(require("session-file-store"));
const express_mysql_session_1 = __importDefault(require("express-mysql-session"));
let store;
switch (process.env.mode) {
    case "prod":
        const options = {
            host: "",
            port: 3306,
            user: "",
            password: "",
            database: ""
        };
        store = (new express_mysql_session_1.default(express_session_1.default))(options);
        break;
    default:
        store = (new session_file_store_1.default(express_session_1.default))();
        break;
}
function allocate(app) {
    app.use((0, express_session_1.default)({
        name: 'session-c-field',
        secret: 'dwadasfafsdfsdfa23432sfddbb1Ag하Φdga#@%#Dgnfvs d 안녕 시2발새끼들아!!',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            //secure: true
        },
        store: store
    }));
}
