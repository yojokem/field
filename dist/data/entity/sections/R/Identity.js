"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const typeorm_1 = require("typeorm");
const Fence_1 = require("../../Fence");
let Identity = class Identity extends Fence_1.Fence {
    id() {
        return "[ID] " + this.fid + "―" + this.fullname + "|" + this.uid;
    }
};
exports.Identity = Identity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Identity.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Identity.prototype, "resiRegAbs", void 0);
exports.Identity = Identity = __decorate([
    (0, typeorm_1.Entity)({ name: "identity" })
], Identity);
