"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const typeorm_1 = require("typeorm");
const Fence_1 = require("../../Fence");
let Identity = class Identity extends Fence_1.Fence {
    id() {
        return this.fid + "―" + this. + "|" + this.uid;
    }
};
exports.Identity = Identity;
exports.Identity = Identity = __decorate([
    (0, typeorm_1.Entity)({ name: "identity" })
], Identity);
