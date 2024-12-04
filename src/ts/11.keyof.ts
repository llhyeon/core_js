type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "tiger",
  age: 35,
};

// Person의 키 값만을 뽑아서 전달
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

getProperty(person, "name"); // "tiger"

CSSStyleDeclaration;
function validCssProperty<T extends keyof CSSStyleDeclaration>(prop: T): boolean {
  return prop in document.body.style;
} // true or false

validCssProperty("color");

const product = {
  id: 1,
  name: "mac-book",
  price: 300,
};

function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]): T {
  product[key] = value;
  return product;
}

setProperty(product, "price", 100);

const products = [
  { name: "mac", price: 500 },
  { name: "iPhone", price: 300 },
  { name: "iPad", price: 300 },
];

function getProperties<T, K extends keyof T>(products: T[], key: K): T[K][] {
  const result = products.map((item) => item[key]);
  return result;
}

getProperties(products, "name");
