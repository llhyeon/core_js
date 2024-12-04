const arr = [1, 2, 3];

// arr.map((n) => n * 2);

function map<T, U>(arr: T[], callback: (n: T) => U): U[] {
  const res: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i]));
  }

  return res;
}

map(arr, (n) => n * 2);
type Callback<T> = (n: T) => void;
type ForEach = <T>(arr: T[], callback: Callback<T>) => void;

const forEach: ForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(arr, (n) => {
  console.log(n);
});
