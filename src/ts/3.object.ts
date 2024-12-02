// 타입스크립트에서 객체는 정해진 키 값만 사용할 수 있다.
const user: {
  id?: number; // id 프로퍼티를 옵셔널 프로퍼티로 변경한다.
  name: string;
  age: number;
} = {
  id: 1,
  name: "tiger",
  age: 40,
};

const config: {
  readonly apiKey: string; // 읽기 전용 속성으로 설정하면 수정이 안 된다.
} = {
  apiKey: "slASFEf2323ld",
};
