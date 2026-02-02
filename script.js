const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

function toggleMenu() {
  const isOpen = mobileNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
}

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", toggleMenu);

  // close on link click
  mobileNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    }),
  );
}
