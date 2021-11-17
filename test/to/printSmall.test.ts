import { expect } from "chai";
import { printSmall } from "../../src/to/printSmall";
import { Script } from "../../src/to/script";
import { Style } from "../../src/to/style";

describe("printSmall", () => {
  it("print simple correctly", () => {
    expect(printSmall("1234")).to.equal("一千二百三十四");
    expect(printSmall("1230")).to.equal("一千二百三十");
    expect(printSmall("1200")).to.equal("一千二百");
    expect(printSmall("1000")).to.equal("一千");

    expect(printSmall("234")).to.equal("二百三十四");
    expect(printSmall("230")).to.equal("二百三十");
    expect(printSmall("200")).to.equal("二百");

    expect(printSmall("34")).to.equal("三十四");
    expect(printSmall("30")).to.equal("三十");

    expect(printSmall("4")).to.equal("四");

    expect(printSmall("0000")).to.equal("零");
    expect(printSmall("000")).to.equal("零");
    expect(printSmall("00")).to.equal("零");
    expect(printSmall("0")).to.equal("零");

    expect(printSmall("1020")).to.equal("一千零二十");
    expect(printSmall("1002")).to.equal("一千零二");
  });

  it("print variants correctly", () => {
    expect(printSmall("1234", Style.Small, Script.Traditional)).to.equal(
      "一千二百三十四"
    );

    expect(printSmall("1234", Style.Big, Script.Traditional)).to.equal(
      "壹仟貳佰參拾肆"
    );

    expect(printSmall("1234", Style.Small, Script.Simplified)).to.equal(
      "一千二百三十四"
    );

    expect(printSmall("1234", Style.Big, Script.Simplified)).to.equal(
      "壹仟贰佰參拾肆"
    );
  });
});
