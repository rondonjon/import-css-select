import { selectAll, selectOne } from "css-select";
import parse from "node-html-parser";

console.log(
  JSON.stringify({
    selectAll: typeof selectAll,
    selectOne: typeof selectOne,
  })
);

const nodes = parse("<html><body>hello, world</body></html>");
const result = nodes.querySelectorAll("body");
console.log("Result: " + result.toString());
