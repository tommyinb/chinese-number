"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSmall = void 0;
const parseDigit_1 = require("./parseDigit");
function parseSmall(text) {
    const match = /(?:([^千仟]*)[千仟])?(?:([^百佰]*)[百佰])?(?:([^十拾]*)[十拾])?([零０0])?(.*)?/.exec(text.replace(/廿/g, "二十").replace(/卅/g, "三十"));
    if (!match) {
        return undefined;
    }
    const thousandText = match[1];
    const thousandValue = thousandText !== undefined
        ? thousandText
            ? (0, parseDigit_1.parseDigit)(thousandText)
            : 1
        : 0;
    if (thousandValue === undefined) {
        return undefined;
    }
    const hundredText = match[2];
    const hundredValue = hundredText !== undefined ? (hundredText ? (0, parseDigit_1.parseDigit)(hundredText) : 1) : 0;
    if (hundredValue === undefined) {
        return undefined;
    }
    const tenText = match[3];
    const tenValue = tenText !== undefined ? (tenText ? (0, parseDigit_1.parseDigit)(tenText) : 1) : 0;
    if (tenValue === undefined) {
        return undefined;
    }
    const separateText = match[4];
    const unitText = match[5];
    const unitValue = unitText ? (0, parseDigit_1.parseDigit)(unitText) : 0;
    if (unitValue === undefined) {
        return undefined;
    }
    if (separateText) {
        return (thousandValue * 1000 + hundredValue * 100 + tenValue * 10 + unitValue);
    }
    else {
        const unitRaise = tenText !== undefined
            ? 1
            : hundredText !== undefined
                ? 10
                : thousandText !== undefined
                    ? 100
                    : undefined;
        if (unitRaise !== undefined) {
            const unitDrop = unitText?.length >= 2 ? Math.pow(10, unitText.length - 1) : 1;
            return (thousandValue * 1000 +
                hundredValue * 100 +
                tenValue * 10 +
                unitValue * (unitRaise / unitDrop));
        }
        else {
            return unitValue;
        }
    }
}
exports.parseSmall = parseSmall;
//# sourceMappingURL=parseSmall.js.map