const lbsInput = document.getElementById("lbsInput");
const gramsOutput = document.getElementById("gramsOutput");
const kgOutput = document.getElementById("kgOutput");
const ozOutput = document.getElementById("ozOutput");

lbsInput.addEventListener("input", (e) => {
  let lbs = e.target.value;
  //console.log(pounds);
  gramsOutput.innerHTML = lbs / 0.0022046;
  kgOutput.innerHTML = lbs / 2.20462;
  ozOutput.innerHTML = lbs * 16;
});
