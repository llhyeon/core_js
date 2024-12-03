const arr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];

// union type
const multi: (string | number | boolean)[] = [10];

// tuple

// 튜플 타입의 특징
// 1. 길이가 고정되어 있다.
// 2. 배열처럼 길이가 동적으로 변경되지 않는다.
// 3. 자리의 타입이 정해져있다.
const tupleA: [number, number] = [1, 2];

const user: [string, number][] = [
  ["심선범", 30],
  ["신석범", 35],
  ["신선범", 13],
];