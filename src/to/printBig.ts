import { units as parseUnits } from "../parse/parseBig";
import { printSmall } from "./printSmall";
import { Script } from "./script";
import { Style } from "./style";

const printUnits = [
  ...parseUnits,
  { traditional: "萬", simplified: "万", power: 4 },
];

export function printBig(
  text: string,
  style: Style = Style.Small,
  script: Script = Script.Traditional
) {
  if (text.length > 24) {
    throw new Error(`cannot convert to Chinese as value ${text} is too big`);
  }

  const tailText = text.slice(-4);
  const tailPart = tailText ? printSmall(tailText, style, script) : "";

  const unitParts = printUnits.map(({ traditional, simplified, power }) => {
    const part = text.slice(-power - 4, -power);
    if (!part) {
      return "";
    }

    const value = printSmall(part, style, script);
    const unit = script === Script.Traditional ? traditional : simplified;

    return `${value}${unit}`;
  });

  const output = `${unitParts.join("")}${tailPart}`;

  const unitPatterns = printUnits.map(
    ({ traditional, simplified }) => `${traditional}${simplified}`
  );
  const zeroRegExp = new RegExp(`(零[${unitPatterns.join("")}]?)+`);

  const zeroReplaced = output.replace(zeroRegExp, "零").replace(/零+$/, "");

  return zeroReplaced || "零";
}
