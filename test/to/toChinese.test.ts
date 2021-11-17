import { expect } from "chai";
import { Script } from "../../src/to/script";
import { Style } from "../../src/to/style";
import { toChinese } from "../../src/to/toChinese";

describe("toChinese", () => {
  it("convert simple correctly", () => {
    expect(toChinese(1002300450607800)).to.equal(
      "一千零二兆三千零四億五千零六十萬七千八百"
    );

    expect(toChinese(-1234)).to.equal("負一千二百三十四");

    expect(toChinese(0.1234)).to.equal("零點一二三四");
    expect(toChinese(-0.1234)).to.equal("負零點一二三四");

    expect(toChinese(654321.1234)).to.equal("六十五萬四千三百二十一點一二三四");
    expect(toChinese(-654321.1234)).to.equal(
      "負六十五萬四千三百二十一點一二三四"
    );
  });

  it("convert variants correctly", () => {
    expect(
      toChinese(-300020001.10002, Style.Small, Script.Traditional)
    ).to.equal("負三億零二萬零一點一零零零二");

    expect(toChinese(-300020001.10002, Style.Big, Script.Traditional)).to.equal(
      "負參億零貳萬零壹點壹零零零貳"
    );

    expect(
      toChinese(-300020001.10002, Style.Small, Script.Simplified)
    ).to.equal("负三亿零二万零一点一零零零二");

    expect(toChinese(-300020001.10002, Style.Big, Script.Simplified)).to.equal(
      "负參亿零贰万零壹点壹零零零贰"
    );
  });
});
