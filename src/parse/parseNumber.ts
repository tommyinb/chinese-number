import { mapDigit } from "./mapDigit";
import { parseBig } from "./parseBig";

export function parseNumber(text: string) {
  const match = /([負负-])?(.*?)(?:[點点.．]([^點点.．]*))?$/.exec(text);

  if (!match) {
    return undefined;
  }

  const negativeText = match[1];
  const negativeValue = negativeText ? -1 : 1;

  const integerText = match[2];
  const integerValue = integerText ? parseBig(integerText) : 0;

  if (integerValue === undefined) {
    return undefined;
  }

  const decimalText = match[3];
  const decimalMapped = decimalText ? mapDigit(decimalText) : "0";

  if (decimalMapped === undefined) {
    return undefined;
  }

  const decimalValue = parseFloat(`0.${decimalMapped || "0"}`);

  return negativeValue * (integerValue + decimalValue);
}
