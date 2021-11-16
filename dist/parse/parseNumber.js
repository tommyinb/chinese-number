"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumber = void 0;
const mapDigit_1 = require("./mapDigit");
const parseBig_1 = require("./parseBig");
function parseNumber(text) {
    const match = /([負负-])?(.*?)(?:[點点.．]([^點点.．]*))?$/.exec(text);
    if (!match) {
        return undefined;
    }
    const negativeText = match[1];
    const negativeValue = negativeText ? -1 : 1;
    const integerText = match[2];
    const integerValue = integerText ? (0, parseBig_1.parseBig)(integerText) : 0;
    if (integerValue === undefined) {
        return undefined;
    }
    const decimalText = match[3];
    const decimalMapped = decimalText ? (0, mapDigit_1.mapDigit)(decimalText) : "0";
    if (decimalMapped === undefined) {
        return undefined;
    }
    const decimalValue = parseFloat(`0.${decimalMapped || "0"}`);
    return negativeValue * (integerValue + decimalValue);
}
exports.parseNumber = parseNumber;
//# sourceMappingURL=parseNumber.js.map