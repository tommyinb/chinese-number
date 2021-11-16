import { expect } from "chai";
import { parseSmall } from "../../src/parse/parseSmall";

describe("parseSmall", () => {
  it("parse simple text correctly", () => {
    expect(parseSmall("一")).to.equal(1);

    expect(parseSmall("十一")).to.equal(11);
    expect(parseSmall("二十一")).to.equal(21);

    expect(parseSmall("四百二")).to.equal(420);
    expect(parseSmall("四百二一")).to.equal(421);
    expect(parseSmall("四百二十一")).to.equal(421);

    expect(parseSmall("二千一")).to.equal(2100);
    expect(parseSmall("二千一百")).to.equal(2100);
    expect(parseSmall("二千三十")).to.equal(2030);
    expect(parseSmall("二千零三十")).to.equal(2030);
  });

  it("parse short text correctly", () => {
    expect(parseSmall("百二")).to.equal(120);
    expect(parseSmall("百二一")).to.equal(121);

    expect(parseSmall("千二")).to.equal(1200);
    expect(parseSmall("千三二一")).to.equal(1321);
  });

  it("parse single overflow correctly", () => {
    expect(parseSmall("十二一")).to.equal(12.1);
    expect(parseSmall("十三二一")).to.equal(13.21);
    expect(parseSmall("一二十")).to.equal(120);
    expect(parseSmall("一二十三二一")).to.equal(123.21);

    expect(parseSmall("百三二一")).to.equal(132.1);
    expect(parseSmall("一二百三二一")).to.equal(1232.1);

    expect(parseSmall("千三二一")).to.equal(1321);
    expect(parseSmall("一二千")).to.equal(12000);
    expect(parseSmall("一二千四三二一零一")).to.equal(12432.101);

    expect(parseSmall("一二三四五六七千六五四三二一")).to.equal(1234567654.321);
  });

  it("parse multiple overflow correctly", () => {
    expect(parseSmall("一二千三四百五六十七八")).to.equal(
      12000 + 3400 + 560 + 7.8
    );

    expect(parseSmall("千一二百三四")).to.equal(1000 + 1200 + 34);
  });

  it("parse pure digits correctly", () => {
    expect(parseSmall("一二")).to.equal(12);
    expect(parseSmall("一二三")).to.equal(123);
    expect(parseSmall("一二三四")).to.equal(1234);
    expect(parseSmall("一二三四五六七八九")).to.equal(123456789);
  });

  it("parse strange text correctly", () => {
    expect(parseSmall("百十")).to.equal(100 + 10);
    expect(parseSmall("千百")).to.equal(1000 + 100);
    expect(parseSmall("千百三")).to.equal(1000 + 130);
  });

  it("return undefined for unrecognizable text", () => {
    expect(parseSmall("甩")).to.undefined;
    expect(parseSmall("十十")).to.undefined;
    expect(parseSmall("開晒收晒")).to.undefined;
  });

  it("parse variant text correctly", () => {
    expect(parseSmall("貳仟參佰肆拾伍")).to.equal(2345);
    expect(parseSmall("９仟零捌拾5")).to.equal(9085);
  });
});
