const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const text = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hx = "#";
  for (let i = 0; i < 6; i++) {
    let rd = rand();
    hx += hex[rd];
  }
  document.body.style.backgroundColor = hx;
  text.textContent = hx;
});

function rand() {
  return Math.floor(15 * Math.random());
}
