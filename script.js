const klik = document.getElementById("guzik");

klik.addEventListener("click", function () {
  document.body.classList.toggle("BgClass");
  klik.classList.toggle("kolor");
});

// jeden
const jeden = document.getElementById("jeden");
const boxone = document.getElementById("preview-box-jeden");
const boxoneclose = document.getElementById("close-one");

jeden.addEventListener("click", () => {
  boxone.classList.remove("hide");
  setTimeout(function () {
    boxone.classList.remove("opacity-off");
  }, 20);
  window.scrollTo(0, 0);
});

boxoneclose.addEventListener("click", () => {
  boxone.classList.add("opacity-off");
  setTimeout(function () {
    boxone.classList.add("hide");
  }, 1);
});
// dwa
const dwa = document.getElementById("dwa");
const boxtwo = document.getElementById("preview-box-dwa");
const boxtwoclose = document.getElementById("close-two");

dwa.addEventListener("click", () => {
  boxtwo.classList.remove("hide");
  setTimeout(function () {
    boxtwo.classList.remove("opacity-off");
  }, 20);
  window.scrollTo(0, 0);
});

boxtwoclose.addEventListener("click", () => {
  boxtwo.classList.add("opacity-off");
  setTimeout(function () {
    boxtwo.classList.add("hide");
  }, 1);
});

// trzy

const trzy = document.getElementById("trzy");
const boxthree = document.getElementById("preview-box-trzy");
const boxthreeclose = document.getElementById("close-three");

trzy.addEventListener("click", () => {
  boxthree.classList.remove("hide");
  setTimeout(function () {
    boxthree.classList.remove("opacity-off");
  }, 20);
  window.scrollTo(0, 0);
});

boxthreeclose.addEventListener("click", () => {
  boxthree.classList.add("opacity-off");
  setTimeout(function () {
    boxthree.classList.add("hide");
  }, 1);
});

// cztery

const cztery = document.getElementById("cztery");
const boxfour = document.getElementById("preview-box-cztery");
const boxfourclose = document.getElementById("close-four");

cztery.addEventListener("click", () => {
  boxfour.classList.remove("hide");
  setTimeout(function () {
    boxfour.classList.remove("opacity-off");
  }, 20);
  window.scrollTo(0, 0);
});

boxfourclose.addEventListener("click", () => {
  boxfour.classList.add("opacity-off");
  setTimeout(function () {
    boxfour.classList.add("hide");
  }, 1);
});