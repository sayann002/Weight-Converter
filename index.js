const lbsInput = document.getElementById("lbsInput");
const gramsOutput = document.getElementById("gramsOutput");
const kgOutput = document.getElementById("kgOutput");
const ozOutput = document.getElementById("ozOutput");
const output = document.getElementById("output");

output.style.visibility = "hidden";
lbsInput.addEventListener("input", (e) => {
  let lbs = e.target.value;
  output.style.visibility = "visible";
  //console.log(pounds);
  gramsOutput.innerHTML = lbs / 0.0022046;
  kgOutput.innerHTML = lbs / 2.20462;
  ozOutput.innerHTML = lbs * 16;
});
