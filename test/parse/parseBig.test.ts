import { expect } from "chai";
import { parseBig } from "../../src/parse/parseBig";

describe("parseBig", () => {
  it("parse simple correctly", () => {
    expect(parseBig("一千二百三十四萬五千六百七十八")).to.equal(1234_5678);

    expect(parseBig("三億五千萬")).to.equal(3_5000_0000);
    expect(parseBig("三兆五千萬")).to.equal(3_0000_5000_0000);
    expect(parseBig("三兆五千億")).to.equal(3_5000_0000_0000);
    expect(parseBig("三兆五千零七億九千萬")).to.equal(3_5007_9000_0000);

    expect(parseBig("一千二百三十四億二千三百四十五萬三千四百五十六")).to.equal(
      1234_2345_3456
    );
    expect(
      parseBig("一千二百三十四兆二千三百四十五億三千四百五十六萬四千五百六十七")
    ).to.equal(Number(1234_2345_3456_4567n));
  });

  it("parse short correctly", () => {
    expect(parseBig("億二")).to.equal(1_2000_0000);
    expect(parseBig("億二萬")).to.equal(1_0002_0000);
    expect(parseBig("億二千")).to.equal(1_0000_2000);

    expect(parseBig("兆二")).to.equal(1_2000_0000_0000);
    expect(parseBig("兆二萬")).to.equal(1_0000_0002_0000);
    expect(parseBig("兆二千")).to.equal(1_0000_0000_2000);
  });

  it("parse overflow correctly", () => {
    expect(parseBig("一萬億")).to.equal(1_0000_0000_0000);
    expect(parseBig("二萬三千億")).to.equal(2_3000_0000_0000);
  });

  it("parse strange text correctly", () => {
    expect(parseBig("兆萬")).to.equal(1_0000_0001_0000);
    expect(parseBig("兆億")).to.equal(1_0001_0000_0000);
  });

  it("parse overflow correctly", () => {
    expect(parseBig("億二三四五六七八九")).to.equal(1_2345_6789);
  });

  it("return undefined for unrecognizable text", () => {
    expect(parseBig("China")).to.undefined;
    expect(parseBig("太空望到長牆")).to.undefined;
  });

  it("parse variant text correctly", () => {
    expect(parseBig("两亿")).to.equal(2_0000_0000);
    expect(parseBig("拾四亿")).to.equal(14_0000_0000);
  });
});
