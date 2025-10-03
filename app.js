

lucide.createIcons();


// Hamburger menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

hamburgerBtn.addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

// Sidebar dropdowns
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
dropdownBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const content = btn.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

// Clone Wedding Dropdown
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('hidden');
});

// Close Clone Wedding dropdown on outside click
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

// Optional: scroll navigation bar left/right
const navItems = document.getElementById('navItems');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const navScroll = document.getElementById('navScroll');

scrollLeft.addEventListener('click', () => {
  navScroll.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
  navScroll.scrollBy({ left: 200, behavior: 'smooth' });
});

