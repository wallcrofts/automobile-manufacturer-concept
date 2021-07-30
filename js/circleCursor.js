const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.addEventListener("mouseup", () => cursor.classList.add("pulse"));
document.addEventListener("animationend", () =>
cursor.classList.remove("pulse"));

document.addEventListener(
"mouseleave",
() => cursor.style.visibility = "hidden");

document.addEventListener(
"mouseenter",
() => cursor.style.visibility = "visible");