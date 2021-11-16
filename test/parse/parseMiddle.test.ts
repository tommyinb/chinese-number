import { expect } from "chai";
import { parseMiddle } from "../../src/parse/parseMiddle";

describe("parseMiddle", () => {
  it("parse simple text correctly", () => {
    expect(parseMiddle("一")).to.equal(1);

    expect(parseMiddle("四千三百二十一")).to.equal(4321);

    expect(parseMiddle("三萬")).to.equal(30000);

    expect(parseMiddle("五萬四千三百二十")).to.equal(54320);
    expect(parseMiddle("四萬零三百二十一")).to.equal(40321);

    expect(parseMiddle("一千二百三十四萬五千六百七十八")).to.equal(12345678);
  });

  it("parse short text correctly", () => {
    expect(parseMiddle("一")).to.equal(1);
    expect(parseMiddle("四千三百二十一")).to.equal(4321);

    expect(parseMiddle("萬二")).to.equal(12000);
    expect(parseMiddle("萬二百")).to.equal(10200);
    expect(parseMiddle("萬二十")).to.equal(10020);
    expect(parseMiddle("萬三百二")).to.equal(10320);
    expect(parseMiddle("萬三百二十")).to.equal(10320);
    expect(parseMiddle("萬四千三百二十")).to.equal(14320);

    expect(parseMiddle("二萬一")).to.equal(21000);
    expect(parseMiddle("十二萬一")).to.equal(121000);
    expect(parseMiddle("三十二萬一")).to.equal(321000);
    expect(parseMiddle("百三萬")).to.equal(1300000);
    expect(parseMiddle("千百三萬")).to.equal(11300000);
  });

  it("parse overflow correctly", () => {
    expect(parseMiddle("十二一")).to.equal(12.1);
    expect(parseMiddle("百三二一")).to.equal(132.1);
    expect(parseMiddle("千四三二一")).to.equal(1432.1);
    expect(parseMiddle("萬五四三二一")).to.equal(15432.1);
  });

  it("parse strange text correctly", () => {
    expect(parseMiddle("萬千")).to.equal(10000 + 1000);
    expect(parseMiddle("萬千百")).to.equal(10000 + 1000 + 100);
    expect(parseMiddle("萬十")).to.equal(10000 + 10);
  });

  it("return undefined for unrecognizable text", () => {
    expect(parseMiddle("HK")).to.undefined;
    expect(parseMiddle("淪陷")).to.undefined;
  });

  it("parse variant text correctly", () => {
    expect(parseMiddle("兩万參仟肆佰伍十陸")).to.equal(23456);
    expect(parseMiddle("９萬零捌拾5")).to.equal(90085);
  });
});
