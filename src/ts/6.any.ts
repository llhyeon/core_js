let obj: any;

obj = { x: 10 };
obj = 123;
obj = "kang";

let arr: unknown;

arr = 1;
arr = "hello";

// 타입 좁히기(narrowing)

if (typeof arr === "number") {
  arr.toFixed();
}