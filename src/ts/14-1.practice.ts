import { PokeMain } from "./type";
const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";

async function getPokeData(url: string): Promise<PokeMain> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function render(target: HTMLBodyElement | Element, data: PokeMain): void {
  const src = data.sprites["front_default"];
  const name = data.species.name;
  target.insertAdjacentHTML(
    "beforeend",
    `<div><img src=${src} alt=${name}><h2>${name.toUpperCase()}</h2></div>`
  );
}

const data = await getPokeData(END_POINT);
const body = document.body;
// render(body, data);

function fetchPokemon() {
  const arr: Promise<PokeMain>[] = [];
  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(fetch(url).then((res) => res.json()));
      console.log(arr);
    });

  return arr;
}

function createPokemonObject(arr: Promise<PokeMain>[]) {
  let pokemon: unknown;
  Promise.all(arr).then((all) => {
    pokemon = all.map((item) => ({
      name: item.name,
      img: item.sprites["front_default"],
    }));
  });
  return pokemon;
}

async function renderPokemon() {
  const data = fetchPokemon();
  const p = await createPokemonObject(data);

  if (Array.isArray(p)) {
    const tag = p
      .map(
        (item) => `
      <li>
        <img src="${item.image}">
        <h2>${item.name}</h2>
      </li>
    `
      )
      .join("");

    (document.querySelector("ul") as Element).insertAdjacentHTML("beforeend", tag);
  }
}

renderPokemon();
