
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Animated role text
const roleElement = document.getElementById("typedRole");
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Web Developer",
  "Problem Solver"
];

let roleIndex = 0;
let characterIndex = roles[0].length;
let deleting = true;

function animateRole() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    characterIndex--;
    roleElement.textContent = currentRole.slice(0, characterIndex);

    if (characterIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(animateRole, 350);
      return;
    }

    setTimeout(animateRole, 45);
  } else {
    const nextRole = roles[roleIndex];
    characterIndex++;
    roleElement.textContent = nextRole.slice(0, characterIndex);

    if (characterIndex >= nextRole.length) {
      deleting = true;
      setTimeout(animateRole, 1700);
      return;
    }

    setTimeout(animateRole, 75);
  }
}

setTimeout(animateRole, 1800);
