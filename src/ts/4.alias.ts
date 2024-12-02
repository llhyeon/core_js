// alias type

// 별칭의 이름은 무조건 대문자로 한다.
// type 방식
type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

type User1 = {
  address: string;
};

// interface 방식
interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// type을 조합하려면
type mixed = User & User1;

// 위 두 방식의 차이점
// 1. type은 동일한 이름으로 선언할 수 없지만 interface는 선언이 가능하며, 선언한 두 개의 정의가 병합된다.

const user1: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

const user2: _User = {
  id: 2,
  name: "kang",
  auth: "admin",
  isPaid: false,
};

// index signature
type Person = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const person: Person = {
  name: "beom",
  age: 30,
  email: "tiger@naver.com",
};
