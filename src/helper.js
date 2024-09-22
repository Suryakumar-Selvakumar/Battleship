function randomize(placement) {
  const choices = ["left", "right", "top", "bottom"];
  let choice = Math.floor(Math.random() * 4);
  if (choices[choice] !== placement) return choices[choice];
  return randomize(placement);
}

function createGrid(num) {
  let mod = num + 1;
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    if (i % mod === 0) {
      div.className = "row-divider";
      div.style.width = "100%";
      div.style.height = "0";
      div.style.border = "0";
    } else {
      div.style.width = maxWidth / num + "px";
      div.style.height = maxWidth / num + "px";
      div.style.border = "solid 1px black";
    }
    container.appendChild(div);
  }
  updateEventListeners();
}

export { randomize, createGrid};
