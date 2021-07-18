function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

let fade = document.querySelectorAll(".fade");
fade.forEach((n) => {
  if (isInViewport(n)) {
    n.classList.add("active");
  }
});
document.addEventListener("onload", () => {
  fade.forEach((n) => {
    if (isInViewport(n)) {
      n.classList.add("active");
    }
  });
});
document.addEventListener("scroll", () => {
  fade.forEach((n) => {
    if (isInViewport(n)) {
      n.classList.add("active");
    } else {
      n.classList.remove("active");
    }
  });
});
