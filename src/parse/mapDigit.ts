export function mapDigit(text: string) {
  const parts = [...text].map((character) => {
    switch (character) {
      case "一":
      case "壹":
      case "1":
      case "１":
        return 1;

      case "二":
      case "貳":
      case "貮":
      case "贰":
      case "兩":
      case "两":
      case "2":
      case "２":
        return 2;

      case "三":
      case "參":
      case "叁":
      case "参":
      case "叄":
      case "3":
      case "３":
        return 3;

      case "四":
      case "肆":
      case "4":
      case "４":
        return 4;

      case "五":
      case "伍":
      case "5":
      case "５":
        return 5;

      case "六":
      case "陸":
      case "6":
      case "６":
        return 6;

      case "七":
      case "柒":
      case "7":
      case "７":
        return 7;

      case "八":
      case "捌":
      case "8":
      case "８":
        return 8;

      case "九":
      case "玖":
      case "9":
      case "９":
        return 9;

      case "零":
      case "0":
      case "０":
        return 0;

      default:
        return undefined;
    }
  });

  if (parts.includes(undefined)) {
    return undefined;
  }

  return parts.join("");
}
