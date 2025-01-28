const session = require("express-session");

let store;

switch(process.env.mode) {
    case "dev":
        store = new (require("session-file-store")(session))();
        break;
    case "prod":
        const options = {
            host: "",
            port: 3306,
            user: "",
            password: "",
            database: ""
        };
        store = new (require("express-mysql-session")(session))(options);
        break;
    default:
        store = new (require("session-file-store")(session))();
        break;
}

function allocate(app) {
    app.use(session({
        name: 'session-c-field',
        secret: 'dwadasfafsdfsdfa23432sfdga#@%#Dgnfvs d 안녕 시발새끼들아!!',
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