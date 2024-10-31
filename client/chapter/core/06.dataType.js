/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
let value;
console.log(typeof value);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const text = 'khlee';
console.log(typeof text);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const testNum = 1;
const testNum2 = 1.2;
console.log(typeof testNum);
console.log(typeof testNum2);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const testBigInt = 111323720792703285902803925n;
console.log(typeof testBigInt);
// 6. 참(true, yes) 또는 거짓(false, no)
const isTrue = true;
console.log(typeof isTrue);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const testObj = {
  name: 'khlee',
  age: 29,
};
console.log(typeof testObj);

// 8. 고유한 식별자(unique identifier)
const testSym = Symbol('khlee');
console.log(testSym);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof 'fjeilsfjslfij');

// 2) 함수 typeof()
console.log(typeof (1 * 24));

// 언어 상, 오류

// Object

// Array

// function
function sum(a, b) {
  return a + b;
}

console.log(typeof sum);

// this
console.log(typeof this);
console.log(this);
