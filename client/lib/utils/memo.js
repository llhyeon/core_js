export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];

    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);

      if (confirm('덮어쓰기 하실건가요 ?')) {
        const history = cache[key];
        cache[key] = callback();
        const current = cache[key];
        console.warn(`${history} -> ${current}`);
      }
      return cache[key];
    }

    cache[key] = callback();
  };
})();

// memo('cube', () => document.querySelector('#cube'));
// memo('cube', () => document.querySelector('#cube'));

// console.log(memo('cube'));
