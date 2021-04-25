import "./styles.css";
import Iterator from "./helpers/iterator";
import { renderElements, updateElement } from "./helpers/render";

const elements = ["A", "B", "C", "D", "E", "F"];

const iterator = new Iterator(elements);

document.getElementById("app").innerHTML = `
  <h1>Iterator</h1>
  <div>
    <div id='elements'></div>
    <button id="left"> < </button>
    <button id="right"> > </button>
  </div>
`;

renderElements(elements);

document.getElementById("right").addEventListener("click", () => {
  const { index } = iterator.next();
  updateElement(index);
});

document.getElementById("left").addEventListener("click", () => {
  const { index } = iterator.prev();
  updateElement(index);
});

renderElements(elements);
