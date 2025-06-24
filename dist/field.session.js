import session from "express-session";
import FileStore from "session-file-store";
import MySQLStore from "express-mysql-session";
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
        store = (new MySQLStore(session))(options);
        break;
    default:
        store = (new FileStore(session))();
        break;
}
function allocate(app) {
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
