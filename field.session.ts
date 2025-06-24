import session from "express-session";
import FileStore from "session-file-store";
import MySQLStore from "express-mysql-session";
import { Express } from "express";

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
        store = (new (MySQLStore as any)(session))(options);
        break;
    default:
        store = (new (FileStore as any)(session))();
        break;
}

function allocate(app: Express) {
    app.use(session({
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

module.exports = allocate;