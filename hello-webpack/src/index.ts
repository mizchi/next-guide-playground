// import { x } from "./foo";
// console.log(x);

import("./foo").then(({ x }) => {
  console.log(x);
});
