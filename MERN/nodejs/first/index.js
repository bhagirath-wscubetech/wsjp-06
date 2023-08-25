import add from "./calc.js"; 
// default import
import { sub } from "./calc.js"; 
// named import

const a = 14;
const b = 10;

const c = add(a, b);
const d = sub(a, b);


console.log(c);
console.log(d);