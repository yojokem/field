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
exports.Fence = void 0;
const typeorm_1 = require("typeorm");
const typeorm_decorators_1 = require("../../typeorm.decorators");
const DataRef_1 = require("./DataRef");
class Fence {
}
exports.Fence = Fence;
__decorate([
    (0, typeorm_decorators_1.PrimaryGeneratedBinaryUuidColumn)(),
    __metadata("design:type", String)
], Fence.prototype, "uid", void 0);
__decorate([
    (0, typeorm_decorators_1.BinaryUUuidColumn)(),
    (0, typeorm_1.OneToMany)(() => DataRef_1.DataRef, ref => ref.data),
    __metadata("design:type", Array)
], Fence.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    __metadata("design:type", String)
], Fence.prototype, "name", void 0);
__decorate([
    (0, typeorm_decorators_1.SectionColumn)(),
    __metadata("design:type", String)
], Fence.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" }),
    __metadata("design:type", typeorm_1.Timestamp)
], Fence.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP()" }),
    __metadata("design:type", Object)
], Fence.prototype, "deleted", void 0);
