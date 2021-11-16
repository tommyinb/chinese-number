import { printDigit } from "./printDigit";

export function printSmall(text: string) {
  if (text.length > 4) {
    throw new Error(`cannot convert to Chinese as value ${text} is too big`);
  }

  const reversed = [...text].reverse();

  const parts = reversed
    .map((character, index) => {
      if (character === "0") {
        return "零";
      }

      const digit = printDigit(character);

      switch (index) {
        case 0:
          return digit;

        case 1:
          return digit + "十";

        case 2:
          return digit + "百";

        case 3:
          return digit + "千";

        default:
          throw new Error();
      }
    })
    .reverse();

  if (parts.every((t) => t === "零")) {
    return "零";
  }

  return parts.join("").replace(/零+/, "零").replace(/零+$/, "");
}
