import { expect } from "chai";
import { mapDigit } from "../src/mapDigit";

describe("mapDigit", () => {
  it("map single digit correctly", () => {
    expect(mapDigit("一")).to.equal("1");
    expect(mapDigit("壹")).to.equal("1");
    expect(mapDigit("1")).to.equal("1");
    expect(mapDigit("１")).to.equal("1");

    expect(mapDigit("二")).to.equal("2");
    expect(mapDigit("貳")).to.equal("2");
    expect(mapDigit("貮")).to.equal("2");
    expect(mapDigit("贰")).to.equal("2");
    expect(mapDigit("兩")).to.equal("2");
    expect(mapDigit("两")).to.equal("2");
    expect(mapDigit("2")).to.equal("2");
    expect(mapDigit("２")).to.equal("2");

    expect(mapDigit("三")).to.equal("3");
    expect(mapDigit("參")).to.equal("3");
    expect(mapDigit("叁")).to.equal("3");
    expect(mapDigit("参")).to.equal("3");
    expect(mapDigit("叄")).to.equal("3");
    expect(mapDigit("3")).to.equal("3");
    expect(mapDigit("３")).to.equal("3");

    expect(mapDigit("四")).to.equal("4");
    expect(mapDigit("肆")).to.equal("4");
    expect(mapDigit("4")).to.equal("4");
    expect(mapDigit("４")).to.equal("4");

    expect(mapDigit("五")).to.equal("5");
    expect(mapDigit("伍")).to.equal("5");
    expect(mapDigit("5")).to.equal("5");
    expect(mapDigit("５")).to.equal("5");

    expect(mapDigit("六")).to.equal("6");
    expect(mapDigit("陸")).to.equal("6");
    expect(mapDigit("6")).to.equal("6");
    expect(mapDigit("６")).to.equal("6");

    expect(mapDigit("七")).to.equal("7");
    expect(mapDigit("柒")).to.equal("7");
    expect(mapDigit("7")).to.equal("7");
    expect(mapDigit("７")).to.equal("7");

    expect(mapDigit("八")).to.equal("8");
    expect(mapDigit("捌")).to.equal("8");
    expect(mapDigit("8")).to.equal("8");
    expect(mapDigit("８")).to.equal("8");

    expect(mapDigit("九")).to.equal("9");
    expect(mapDigit("玖")).to.equal("9");
    expect(mapDigit("9")).to.equal("9");
    expect(mapDigit("９")).to.equal("9");

    expect(mapDigit("零")).to.equal("0");
    expect(mapDigit("0")).to.equal("0");
    expect(mapDigit("０")).to.equal("0");
  });

  it("map multiple digits correctly", () => {
    expect(mapDigit("一二三")).to.equal("123");
    expect(mapDigit("七二一")).to.equal("721");
    expect(mapDigit("八零八")).to.equal("808");
  });

  it("return undefined for unrecognizable text", () => {
    expect(mapDigit("一甩")).to.undefined;
    expect(mapDigit("A")).to.undefined;
    expect(mapDigit("不")).to.undefined;
  });
});
