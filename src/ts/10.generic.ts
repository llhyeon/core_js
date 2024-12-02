/* -------------------------------------------------------------------------- */
/*                                generic type                                */
/* -------------------------------------------------------------------------- */
// T는 Type을 뜻한다.
function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc("hello");
const c = sumFunc(false);

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true);

function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}

const b1 = getLength([1, 2, 3]);
const b2 = getLength("hello");
const b3 = getLength({ name: "tiger", length: 3 });

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const kang = new Test("kang");
