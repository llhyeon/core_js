import {
  clearContents,
  delayP,
  changeColor,
  getNode,
  kang,
  renderLoadingSpinner,
  renderUserCard,
  renderEmptyCard,
  getNodes,
} from './lib/index.js';

const END_POINT = 'http://localhost:3000/users';
const userCardInner = getNode('.user-card-inner');
const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');
const inputs = getNodes('input');

async function renderUserList() {
  try {
    renderLoadingSpinner(userCardInner);
    const res = await kang.get(END_POINT);
    // getNode('.loadingSpinner').remove();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      // 애니메이션이 완료 됐을 시 동작하는 GSAP 제공 함수
      onComplete() {
        this._targets[0].remove();
      },
    });
    const users = res.data;
    await delayP(1000);

    users.forEach((user) => {
      renderUserCard(userCardInner, user);
    });
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'start',
      },
    });
  } catch (err) {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });
    await delayP(1000);
    renderEmptyCard(userCardInner);
    console.error(err);
  }
}
renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const index = button.parentElement.dataset.index.split('-')[1];

  kang.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제 완료');

    clearContents(userCardInner);
    renderUserList();
  });
}

function handleCreate() {
  this.classList.add('open');
  gsap.to('.pop', {
    autoAlpha: 1,
  });
}

function handleCancel(e) {
  e.stopPropagation();
  // createButton.classList.remove('open');
  gsap.to('.pop', {
    autoAlpha: 0,
  });
}

function handlePost(e) {
  e.preventDefault();
  const [name, email, website] = inputs;

  const postData = {
    name: name.value,
    email: email.value,
    website: website.value,
  };

  console.log(postData);

  kang.post(END_POINT, postData).then(() => {
    gsap.to('.pop', {
      autoAlpha: 0,
    });
    clearContents(userCardInner);
    renderUserList();

    name.value = '';
    email.value = '';
    website.value = '';
  });
}

userCardInner.addEventListener('click', handleDelete);

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handlePost);
