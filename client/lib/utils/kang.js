// const END_POINT = 'https://jsonplaceholder.typicode.com/users';
// const response = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'kang', age: 29 }),
// });
// const result = await response.json();
// console.log(result);

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export async function kang(options) {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  } else {
    throw new Error('ERROR');
  }

  return response;
}

// const result = await kang({
//   // 비동기 함수는 '무조건' 프로미스 객체를 반환하니까 값을 리턴 받으려면 await을 붙여줘야 한다.
//   url: END_POINT,
// });

kang.get = (url, options) => {
  return kang({ url, ...options });
};

// const result = await kang.get(END_POINT);

kang.post = (url, body, options) => {
  return kang({ method: 'POST', url, body: JSON.stringify(body), ...options });
};

kang.put = (url, body, options) => {
  return kang({ method: 'PUT', url, body: JSON.stringify(body), ...options });
};

kang.patch = (url, body, options) => {
  return kang({ method: 'PATCH', url, body: JSON.stringify(body), ...options });
};

kang.delete = (url, options) => {
  return kang({ method: 'DELETE', url, ...options });
};
