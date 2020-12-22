import ts from "typescript";

const ret = ts.transpileModule(`const x: number = 1`, {});
console.log(ret.outputText);
