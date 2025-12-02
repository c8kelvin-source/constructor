
import { add, subtract, multiply, divide } from "./math.js";


import { capitalize, length, reverse } from "./string.js";


console.log("=== Toán Học ===");
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 5 =", divide(20, 5));

console.log("=== Xử Lý Chuỗi ===");
console.log("capitalize('hello') =", capitalize("hello"));
console.log("length('javascript') =", length("javascript"));
console.log("reverse('abc123') =", reverse("abc123"));
