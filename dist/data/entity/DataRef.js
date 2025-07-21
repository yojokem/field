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
exports.DataRef = void 0;
const typeorm_1 = require("typeorm");
const typeorm_decorators_1 = require("../../typeorm.decorators");
const _0default_1 = require("./0default");
let DataRef = class DataRef extends _0default_1.default0 {
};
exports.DataRef = DataRef;
__decorate([
    (0, typeorm_decorators_1.BinaryUuidColumn)(),
    (0, typeorm_1.ManyToOne)(() => _0default_1.default0, data => data.references),
    __metadata("design:type", _0default_1.default0)
], DataRef.prototype, "data", void 0);
__decorate([
    (0, typeorm_decorators_1.SectionColumn)(),
    __metadata("design:type", String)
], DataRef.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" }),
    __metadata("design:type", Date)
], DataRef.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" }),
    __metadata("design:type", Date)
], DataRef.prototype, "deleted", void 0);
exports.DataRef = DataRef = __decorate([
    (0, typeorm_1.Entity)({ name: "dataref" })
], DataRef);
