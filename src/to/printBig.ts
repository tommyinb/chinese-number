import { printSmall } from "./printSmall";
import { Script } from "./script";
import { Style } from "./style";

export function printBig(
  text: string,
  style: Style = Style.Small,
  script: Script = Script.Traditional
) {
  if (text.length > 16) {
    throw new Error(`cannot convert to Chinese as value ${text} is too big`);
  }

  const unitText = text.slice(-4);
  const unitPart = unitText ? printSmall(unitText, style, script) : "";

  const tenThousandText = text.slice(-8, -4);
  const tenThousandPart = tenThousandText
    ? printSmall(tenThousandText, style, script) +
      (script === Script.Traditional ? "萬" : "万")
    : "";

  const hundredMillionText = text.slice(-12, -8);
  const hundredMillionPart = hundredMillionText
    ? printSmall(hundredMillionText, style, script) +
      (script === Script.Traditional ? "億" : "亿")
    : "";

  const trillionText = text.slice(-16, -12);
  const trillionPart = trillionText
    ? printSmall(trillionText, style, script) + "兆"
    : "";

  const output = `${trillionPart}${hundredMillionPart}${tenThousandPart}${unitPart}`;
  const replaced = output
    .replace(/(零[萬万億亿兆]?)+/, "零")
    .replace(/零+$/, "");

  return replaced || "零";
}
