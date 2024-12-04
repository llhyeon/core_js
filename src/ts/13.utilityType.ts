// // Omit(생략하다)

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type PublicUser = Omit<User, "email">;

// const user: PublicUser = {
//   // User type에서 email 키를 뺀다.
//   id: 1,
//   name: "tiger",
// };

// const user2: Pick<User, "id" | "name"> = {
//   // User type에서 id와 name만 선택해서 사용한다.
//   id: 2,
//   name: "beom",
// };

// type Address = {
//   lat: number;
//   long: number;
// };
// type User3 = {
//   id: number;
//   name: string;
//   email: string;
//   address: Address;
// };

// const user3: Partial<User3> = {
//   // Partial 은 특정 부분만 사용, 모든 옵션이 다 optional로 변함
//   name: "seon",
// };

// type User4 = {
//   id: number;
//   name: string;
//   email: string;
// };

// const user4: Readonly<User4> = {
//   // 모든 속성이 읽기 전용 속성으로 바뀐다.
//   id: 1,
//   name: "tiger",
//   email: "fiefl@nave.com",
// };

// const User5: Required<User3> = {
//   // 모든 속성들이 필수 입력 값이다. type에 optional 속성이 있는데 필수 값으로 변경하기 위해 사용
//   id: 1,
//   name: "tiger",
//   email: "tiger@naver.com",
//   address: {
//     lat: 20,
//     long: 23.5,
//   },
// };

// type ShallowPartial<T> = {
//   [K in keyof T]?: T[K];
// };

// const user6: ShallowPartial<User3> = {
//   name: "tiger",
//   address: {
//     lat: 20,
//     long: 33.5,
//   },
// };
