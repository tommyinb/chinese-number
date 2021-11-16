import { parseSmall } from "./parseSmall";

export function parseMiddle(text: string) {
  const match = /(?:([^萬万]*)[萬万])?([零０0])?(.*)?/.exec(text);

  if (!match) {
    return undefined;
  }

  const tenThousandText = match[1];
  const tenThousandValue =
    tenThousandText !== undefined
      ? tenThousandText
        ? parseSmall(tenThousandText)
        : 1
      : 0;

  if (tenThousandValue === undefined) {
    return undefined;
  }

  const separateText = match[2];

  const unitText = match[3];
  const unitValue = unitText ? parseSmall(unitText) : 0;

  if (unitValue === undefined) {
    return undefined;
  }

  if (separateText || /[千仟百佰十拾]/.exec(unitText || "")) {
    return tenThousandValue * 10000 + unitValue;
  } else {
    if (tenThousandText !== undefined) {
      const unitDrop =
        unitText?.length >= 2 ? Math.pow(10, unitText.length - 1) : 1;

      return tenThousandValue * 10000 + unitValue * (1000 / unitDrop);
    } else {
      return unitValue;
    }
  }
}
