/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// class Animal {
//   // public class field
//   legs = 4;
//   tail = true;
//   // #name = 'unknown';
//   // 최초 1회만 실행
//   constructor(name) {
//     this.name = name;
//     this.stomach = [];
//   }

//   get eat() {
//     return this.stomach;
//   }

//   set eat(food) {
//     this.stomach.push(food);
//   }
// }

// class Tiger extends Animal {
//   constructor(name) {
//     super(name); // 확장된 클래스의 속성을 받아온다. call() 과 같은 느낌으로 사용됨.
//     this.pattern = '호랑의 무늬';
//   }

//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다`;
//   }

//   static bark(sound) {
//     return sound + '🐯';
//   }
// }

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// class Button {
//   constructor(selector) {
//     this.button = document.querySelector(selector);
//     this.count = 0;
//     this.attachEvent();
//   }

//   createTag() {
//     return `<div>${++this.count + 'click'}</div>`;
//   }

//   render() {
//     document.body.insertAdjacentHTML('beforeend', this.createTag());
//   }

//   handleClick() {
//     console.log(this);
//     this.render();
//   }

//   attachEvent() {
//     this.button.addEventListener('click', this.handleClick);
//   }
// }

// const button = new Button('.btn');

// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `<div>${++count + 'clicked'}</div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// // _button.addEventListener('click', handleClick);

class User {
  #pw;
  constructor(userId, userPw) {
    this.id = userId;
    this.#pw = this.hashPassword(userPw);
  }

  hashPassword(pw) {
    return 'hashCODE' + pw + 'saltttt';
  }
}

const user = new User('tiger', 'hello123');
// console.log(user.#pw);
