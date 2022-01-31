const reveals = document.querySelectorAll(".reveal");
const scrollButton = document.querySelector(".fa-arrow-circle-up");
const rootElement = document.documentElement;
const topArrow = document.querySelector(".topArrow");

window.addEventListener("scroll", reveal);
function reveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

const showOnPx = 1200;
const scrollContainer = () => {
  return rootElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    topArrow.classList.remove("hidden");
  } else {
    topArrow.classList.add("hidden");
  }
});

scrollButton.addEventListener("click", scrollToTop);
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
