import 'express-session';
import "reflect-metadata";

declare module 'express-session' {
    interface SessionData {
        cookie: Cookie;
        lang: Language;
        
    }
}