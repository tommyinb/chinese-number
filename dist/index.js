"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChineseNumber = exports.parseChineseNumber = void 0;
const parseNumber_1 = require("./parse/parseNumber");
const toChinese_1 = require("./to/toChinese");
function parseChineseNumber(text) {
    if (!text) {
        return undefined;
    }
    return (0, parseNumber_1.parseNumber)(`${text}`);
}
exports.parseChineseNumber = parseChineseNumber;
function toChineseNumber(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return undefined;
    }
    const number = Number(value);
    if (isNaN(number)) {
        return undefined;
    }
    return (0, toChinese_1.toChinese)(number);
}
exports.toChineseNumber = toChineseNumber;
//# sourceMappingURL=index.js.map