"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBig = void 0;
const parseMiddle_1 = require("./parseMiddle");
function parseBig(text) {
    const match = /(?:([^兆]*)兆)?(?:([^億亿]*)[億亿])?([零０0])?(.*)/.exec(text);
    if (!match) {
        return undefined;
    }
    const trillionText = match[1];
    const trillionValue = trillionText !== undefined
        ? trillionText
            ? (0, parseMiddle_1.parseMiddle)(trillionText)
            : 1
        : 0;
    if (trillionValue === undefined) {
        return undefined;
    }
    const hundredMillionText = match[2];
    const hundredMillionValue = hundredMillionText !== undefined
        ? hundredMillionText
            ? (0, parseMiddle_1.parseMiddle)(hundredMillionText)
            : 1
        : 0;
    if (hundredMillionValue === undefined) {
        return undefined;
    }
    const separateText = match[3];
    const unitText = match[4];
    const unitValue = unitText ? (0, parseMiddle_1.parseMiddle)(unitText) : 0;
    if (unitValue === undefined) {
        return undefined;
    }
    if (separateText || /[萬万千仟百佰十拾]/.exec(unitText || "")) {
        return (trillionValue * 1_0000_0000_0000 +
            hundredMillionValue * 1_0000_0000 +
            unitValue);
    }
    else {
        const unitRaise = hundredMillionText !== undefined
            ? 1000_0000
            : trillionText !== undefined
                ? 1000_0000_0000
                : undefined;
        if (unitRaise !== undefined) {
            const unitDrop = unitText?.length >= 2 ? Math.pow(10, unitText.length - 1) : 1;
            return (trillionValue * 1_0000_0000_0000 +
                hundredMillionValue * 1_0000_0000 +
                unitValue * (unitRaise / unitDrop));
        }
        else {
            return unitValue;
        }
    }
}
exports.parseBig = parseBig;
//# sourceMappingURL=parseBig.js.map