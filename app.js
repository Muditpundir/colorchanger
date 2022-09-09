const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let id = rand();
  document.body.style.backgroundColor = colors[id];
  color.textContent = colors[id];
});
function rand() {
  return Math.floor(3 * Math.random());
}
