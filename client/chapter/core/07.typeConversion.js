/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = [1, 2, 32, 4];

console.log(String(YEAR));

// undefined, null

// boolean

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

// null => 0
console.log(Number(null));

// boolean true => 1, false => 0
console.log(Number(true));
console.log(Number(false));

// string => NaN
const num = '100';

console.log(Number(num));

// numeric string

const width = '120.5px';

console.log(parseInt(width));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
