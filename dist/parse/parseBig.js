"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBig = exports.units = void 0;
const parseMiddle_1 = require("./parseMiddle");
exports.units = [
    { traditional: "垓", simplified: "垓", power: 20 },
    { traditional: "京", simplified: "京", power: 16 },
    { traditional: "兆", simplified: "兆", power: 12 },
    { traditional: "億", simplified: "亿", power: 8 },
];
function parseBig(text) {
    const replacedText = text.replace(/萬萬/g, "億");
    const unitPatterns = exports.units.map(({ traditional, simplified }) => `(?:([^${traditional}${simplified}]*)[${traditional}${simplified}])?`);
    const regExp = new RegExp(`${unitPatterns.join("")}([零０0])?(.*)`);
    const match = regExp.exec(replacedText);
    if (!match) {
        return undefined;
    }
    const unitTexts = exports.units.map((_, i) => match[i + 1]);
    const unitValues = unitTexts.map((text) => text !== undefined ? (text ? (0, parseMiddle_1.parseMiddle)(text) : 1) : 0);
    if (unitValues.some((t) => t === undefined)) {
        return undefined;
    }
    const unitedValues = unitValues.map((value, index) => {
        const unit = exports.units[index];
        return (value || 0) * Math.pow(10, unit.power);
    });
    const unitedSum = unitedValues.reduce((a, b) => a + b, 0);
    const separateText = match[exports.units.length + 1];
    const tailText = match[exports.units.length + 2];
    const tailValue = tailText ? (0, parseMiddle_1.parseMiddle)(tailText) : 0;
    if (tailValue === undefined) {
        return undefined;
    }
    if (separateText || /[萬万千仟百佰十拾]/.exec(tailText || "")) {
        return unitedSum + tailValue;
    }
    else {
        const tailRaise = unitTexts.reduce((previousValue, currentValue, currentIndex) => {
            if (currentValue !== undefined) {
                const unit = exports.units[currentIndex];
                return Math.pow(10, unit.power - 1);
            }
            else {
                return previousValue;
            }
        }, 0);
        if (tailRaise > 0) {
            const tailDrop = tailText?.length >= 2 ? Math.pow(10, tailText.length - 1) : 1;
            return unitedSum + tailValue * (tailRaise / tailDrop);
        }
        else {
            return tailValue;
        }
    }
}
exports.parseBig = parseBig;
//# sourceMappingURL=parseBig.js.map