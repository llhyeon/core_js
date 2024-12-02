// void

function sayHi(): string {
  return "hello";
}

function printHi(): void {
  console.log("hello");
}

// never type
function showError(message: string): never {
  throw new Error(message);
}

showError("해당 함수는 에러가 발생했습니다.");
