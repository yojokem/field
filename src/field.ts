import * as path from "path";
import "reflect-metadata";
import express from 'express';
import cookieparser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import nunjucks from 'nunjucks';

/* Load */

const app = express();
const PORT = process.env.PORT;

/**
 * View Engines
 */

app.set('view engine', 'html');
nunjucks.configure(path.join(__dirname, "views"), {
    express: app,
    watch: true,
});
app.set('views', path.join(__dirname, "views"));

/**
 * Middleware Lineages
 */

switch(process.env.mode) {
    case "prod":
        app.use(logger('combined'));
        app.use(helmet({
            contentSecurityPolicy: false,
        }));
        break;
    default:
        app.use(logger('dev'));
        break;
}

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, "public")));
import { allocate } from './field.session'; //Session
allocate(app);

/* ******************* */

/**
 * Router Registration
 */

import { RouteModel } from './routes/.index';
import * as ROUTES from './routes';
ROUTES.LISTS.forEach((l: RouteModel) => l.apply(app));

/* ******************* */

console.info(`Field is mandatory to serve on the PORT ${PORT}`);

app.listen(PORT, () => {
    console.log(`is now running on the PORT ${PORT}`);
    console.log(`Current Running Mode: [${process.env.mode}]`);
});