"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDigit = void 0;
const mapDigit_1 = require("./mapDigit");
function parseDigit(text) {
    const mapped = (0, mapDigit_1.mapDigit)(text);
    if (mapped === undefined) {
        return undefined;
    }
    return parseInt(mapped);
}
exports.parseDigit = parseDigit;
//# sourceMappingURL=parseDigit.js.map