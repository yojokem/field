"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidValueTransformer = void 0;
class UuidValueTransformer {
    to(uuid) {
        return uuid ? Buffer.from(uuid.replace(/-/g, ""), "hex") : null;
    }
    from(bin) {
        return bin
            ? `${bin.toString("hex", 0, 4)}-${bin.toString("hex", 4, 6)}-${bin.toString("hex", 6, 8)}-${bin.toString("hex", 8, 10)}-${bin.toString("hex", 10, 16)}`
            : null;
    }
}
exports.uuidValueTransformer = new UuidValueTransformer();
