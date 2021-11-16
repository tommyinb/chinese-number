import { printSmall } from "./printSmall";

export function printBig(text: string) {
  if (text.length > 16) {
    throw new Error(`cannot convert to Chinese as value ${text} is too big`);
  }

  const unitText = text.slice(-4);
  const unitPart = unitText ? printSmall(unitText) : "";

  const tenThousandText = text.slice(-8, -4);
  const tenThousandPart = tenThousandText
    ? printSmall(tenThousandText) + "萬"
    : "";

  const hundredMillionText = text.slice(-12, -8);
  const hundredMillionPart = hundredMillionText
    ? printSmall(hundredMillionText) + "億"
    : "";

  const trillionText = text.slice(-16, -12);
  const trillionPart = trillionText ? printSmall(trillionText) + "兆" : "";

  const output = `${trillionPart}${hundredMillionPart}${tenThousandPart}${unitPart}`;
  const replaced = output.replace(/(零[萬億兆]?)+/, "零").replace(/零+$/, "");

  return replaced || "零";
}
