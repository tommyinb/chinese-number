import { expect } from "chai";
import { parseNumber } from "../../src/parse/parseNumber";

describe("parseNumber", () => {
  it("parse decimal correctly", () => {
    expect(parseNumber("十二點三")).to.equal(12.3);
    expect(parseNumber("三萬點四")).to.equal(30000.4);

    expect(parseNumber("點三")).to.equal(0.3);
  });

  it("parse negative correctly", () => {
    expect(parseNumber("負六")).to.equal(-6);

    expect(parseNumber("負十二點三")).to.equal(-12.3);

    expect(parseNumber("負萬二")).to.equal(-12000);
    expect(parseNumber("負三萬")).to.equal(-30000);

    expect(parseNumber("負點三")).to.equal(-0.3);
  });

  it("parse overflow correctly", () => {
    expect(parseNumber("負一萬億")).to.equal(-1_0000_0000_0000);
    expect(parseNumber("負一萬億點四")).to.equal(-1_0000_0000_0000.4);
  });

  it("parse strange text correctly", () => {
    expect(parseNumber("負點")).to.equal(0);

    expect(parseNumber("萬點")).to.equal(1_0000);
    expect(parseNumber("億點")).to.equal(1_0000_0000);
    expect(parseNumber("兆點")).to.equal(1_0000_0000_0000);
  });

  it("return undefined for unrecognizable text", () => {
    expect(parseNumber("負負")).to.undefined;
    expect(parseNumber("點點")).to.undefined;

    expect(parseNumber("三點二點一")).to.undefined;
    expect(parseNumber("負負負七七七")).to.undefined;
    expect(parseNumber("點千")).to.undefined;
    expect(parseNumber("點兆")).to.undefined;

    expect(parseNumber("三點二十")).to.undefined;

    expect(parseNumber("HK")).to.undefined;
    expect(parseNumber("沉淪")).to.undefined;
  });

  it("parse variant text correctly", () => {
    expect(parseNumber("负貳点肆")).to.equal(-2.4);
    expect(parseNumber("-３．7")).to.equal(-3.7);
    expect(parseNumber("-３.７")).to.equal(-3.7);
  });
});
