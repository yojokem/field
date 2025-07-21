"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionColumn = exports.BinaryUUuidColumn = exports.BinaryUuidColumn = exports.PrimaryGeneratedBinaryUuidColumn = void 0;
const typeorm_1 = require("typeorm");
const uuid_value_transformer_1 = require("./utils/defaultuuid/uuid-value.transformer");
const PrimaryGeneratedBinaryUuidColumn = () => (0, typeorm_1.PrimaryColumn)({
    type: "binary",
    length: 16,
    generated: false,
    transformer: uuid_value_transformer_1.uuidValueTransformer,
    default: () => "UNHEX(REPLACE(UUID(), '-', ''))",
});
exports.PrimaryGeneratedBinaryUuidColumn = PrimaryGeneratedBinaryUuidColumn;
const BinaryUuidColumn = (name) => (0, typeorm_1.Column)({
    type: "binary",
    name,
    length: 16,
    generated: false,
    transformer: uuid_value_transformer_1.uuidValueTransformer,
    unique: false,
});
exports.BinaryUuidColumn = BinaryUuidColumn;
const BinaryUUuidColumn = (name) => (0, typeorm_1.Column)({
    type: "binary",
    name,
    length: 16,
    generated: false,
    transformer: uuid_value_transformer_1.uuidValueTransformer,
    unique: true,
});
exports.BinaryUUuidColumn = BinaryUUuidColumn;
// Thanks to git@mkfyi | 정말 존나 고맙습니다.
const SectionColumn = () => (0, typeorm_1.Column)({
    type: "varchar",
    name: "section",
    length: 5,
    generated: false,
    unique: false,
    nullable: false
});
exports.SectionColumn = SectionColumn;
