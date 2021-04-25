export function renderElements(elements) {
  let _elements = "";
  elements.forEach((element, index) => {
    _elements += `<span id='element${index}'>${element}</span>`;
  });
  document.getElementById("elements").innerHTML = _elements;
}

export function updateElement(index) {
  let nonSelected = document.getElementsByClassName("selected")[0];
  if (nonSelected) {
    nonSelected.removeAttribute("class");
  }
  const selected = document.getElementById(`element${index}`);
  selected.className = "selected";
}
