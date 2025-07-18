import * as session0 from "express-session";
import session from "express-session";
import FileStore from "session-file-store";
import MySQLStore from "express-mysql-session";
import { Express } from "express";
import process from 'process';
import * as path from 'path';

let store: session.Store;

switch(process.env.mode) {
    case "prod":
        const options = {
            host: "",
            port: 3306,
            user: "",
            password: "",
            database: ""
        };
        store = new (MySQLStore(session0))(options);
        break;
    default:
        store = new (FileStore(session))({
            path: path.join(process.cwd(), "/sessions"),
            reapInterval: 600
        });
        break;
}

export function allocate(app: Express) {
    app.use(session({
        name: 'session-c-field',
        secret: 'dΘΛwadas¤‰ΘΘΘ23432Λsfddbb1Ag하Φdga#@%#Dgnfvs d 안녕 시2발새끼들아!!',
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