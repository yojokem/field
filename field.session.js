const session = require("express-session");

// File Store
const store1 = require("session-file-store")(session);

// MySQL
const store2 = require("express-mysql-session")(session);
const options = {
    host: "",
    port: 3306,
    user: "",
    password: "",
    database: ""
};

function allocate(app) {
    process.env
    app.use(session({
        name: 'session-c-field',
        secret: '',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            //secure: true
        }
    }));
}

module.exports = allocate;