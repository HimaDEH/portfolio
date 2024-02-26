function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function () {
  const professions = ['Undergraduate','Front-end', 'Back-end', 'UI-UX'];
  let index = 0;
  const textElement = document.querySelector('.section-text-container-p2');

  setInterval(() => {
    textElement.textContent = professions[index];
    index = (index + 1) % professions.length;
  }, 2000); // Change every 2 seconds
});