"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = exports.Style = exports.toChineseNumber = exports.parseChineseNumber = void 0;
const parseNumber_1 = require("./parse/parseNumber");
const script_1 = require("./to/script");
Object.defineProperty(exports, "Script", { enumerable: true, get: function () { return script_1.Script; } });
const style_1 = require("./to/style");
Object.defineProperty(exports, "Style", { enumerable: true, get: function () { return style_1.Style; } });
const toChinese_1 = require("./to/toChinese");
function parseChineseNumber(text) {
    if (!text) {
        return undefined;
    }
    return (0, parseNumber_1.parseNumber)(`${text}`);
}
exports.parseChineseNumber = parseChineseNumber;
function toChineseNumber(value, style, script) {
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
    return (0, toChinese_1.toChinese)(number, style || style_1.Style.Small, script || script_1.Script.Traditional);
}
exports.toChineseNumber = toChineseNumber;
//# sourceMappingURL=index.js.map