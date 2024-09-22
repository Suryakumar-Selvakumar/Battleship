function randomize(placement) {
  const choices = ["left", "right", "top", "bottom"];
  let choice = Math.floor(Math.random() * 4);
  if (choices[choice] !== placement) return choices[choice];
  return randomize(placement);
}

export { randomize };
