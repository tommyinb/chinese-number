import { parseChineseNumber, toChineseNumber } from "../dist/index.js";
import { toArabic } from "../dist/to/toArabic.js";
import examples from "./examples.json";

const parseCard = document.querySelector(".card.parse");
const parseInput = parseCard.querySelector("input");
const parseOutput = parseCard.querySelector(".output");
const parseCode = parseCard.querySelector(".code");

parseCard.onclick = () => parseInput.focus();

setInterval(runParse, 50);
function runParse() {
  const value = parseChineseNumber(parseInput.value);

  if (value === undefined) {
    parseCard.classList.add("error");
    trySetText(
      parseCode,
      `parseChineseNumber('${parseInput.value}') = undefined`
    );
    return undefined;
  }

  const text = value.toString();
  trySetText(parseOutput, text);

  parseCard.classList.remove("error");
  trySetText(
    parseCode,
    `parseChineseNumber('${parseInput.value}') = ${toArabic(value)}`
  );

  return value;
}

const printCard = document.querySelector(".card.print");
const printInput = printCard.querySelector("input");
const printOutput = printCard.querySelector(".output");
const printCode = printCard.querySelector(".code");

printCard.onclick = () => printInput.focus();

setInterval(runPrint, 50);
function runPrint() {
  const value = Number(printInput.value);

  if (isNaN(value)) {
    printCard.classList.add("error");
    trySetText(printCode, `toChineseNumber(NaN) = undefined`);
    return;
  }

  const text = toChineseNumber(value);
  trySetText(printOutput, text);

  printCard.classList.remove("error");
  trySetText(printCode, `toChineseNumber(${toArabic(value)}) = ${text}`);
}

let autoNext = true;
let nextIndex = 0;
setInterval(() => {
  if (autoNext) {
    next();
  }
}, 1500);
function next() {
  const example = examples[nextIndex++ % examples.length];

  parseInput.value = example;
  const value = runParse();

  printInput.value = value;
  runPrint();
}

const nextButton = document.querySelector(".next");
nextButton.onclick = () => {
  autoNext = true;
  next();
};

parseInput.onfocus = () => (autoNext = false);
printInput.onfocus = () => (autoNext = false);

function trySetText(element, text) {
  if (element.innerText !== text) {
    element.innerText = text;
  }
}
