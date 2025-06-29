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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LISTS = void 0;
const _index_1 = require("./.index");
const _page_1 = require("./.page");
const defaultIndex = new _index_1.RouteModel("Default", "/");
defaultIndex.setLocal("title", "FIELD");
let p = defaultIndex.router;
const PageGround = new _page_1.Page("Field ∥ set-ground", 'ground');
PageGround.pass(p);
p.get("/", (req, res) => {
    defaultIndex.setLocal("b", "dwa"); //res.locals.b = "c";
    res.render(PageGround.path);
});
// 의문점: root에 Page의 middlewares를 적용하면, 이게 root-related relative link에도 적용되는 middlewares가 될 것인가?
//new RouteModel("Default", "/")
// Load
const auth = __importStar(require("./auth"));
exports.LISTS = [defaultIndex, auth.auth];
