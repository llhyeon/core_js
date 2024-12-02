// alias type
// 위 두 방식의 차이점
// 1. type은 동일한 이름으로 선언할 수 없지만 interface는 선언이 가능하며, 선언한 두 개의 정의가 병합된다.
const user1 = {
    id: 1,
    name: "tiger",
    auth: "admin",
    isPaid: true,
};
const user2 = {
    id: 2,
    name: "kang",
    auth: "admin",
    isPaid: false,
};
const person = {
    name: "beom",
    age: 30,
    email: "tiger@naver.com",
};
export {};
