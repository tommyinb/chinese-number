import { printDigit } from "./printDigit";
import { Script } from "./script";
import { Style } from "./style";

export function printSmall(
  text: string,
  style: Style = Style.Small,
  script: Script = Script.Traditional
) {
  if (text.length > 4) {
    throw new Error(`cannot convert to Chinese as value ${text} is too big`);
  }

  const reversed = [...text].reverse();

  const parts = reversed
    .map((character, index) => {
      if (character === "0") {
        return "零";
      }

      const digit = printDigit(character, style, script);

      switch (index) {
        case 0:
          return digit;

        case 1:
          return digit + (style === Style.Big ? "拾" : "十");

        case 2:
          return digit + (style === Style.Big ? "佰" : "百");

        case 3:
          return digit + (style === Style.Big ? "仟" : "千");

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
