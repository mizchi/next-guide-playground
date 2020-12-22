import fs from "fs";
fs.writeFileSync("out.json", JSON.stringify({ hello: "greeting" }));
