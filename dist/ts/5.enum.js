// enumerable type -> 열거 가능한
// 찐 상수
// 값을 넣지 않으면 0이 할당된다.
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 3] = "UP";
    Direction[Direction["DOWN"] = 4] = "DOWN";
    Direction[Direction["LEFT"] = 5] = "LEFT";
    Direction[Direction["RIGHT"] = 6] = "RIGHT";
})(Direction || (Direction = {}));
const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    left: Direction.LEFT,
    right: Direction.RIGHT,
};
export {};
