// Menu Toggle Functions
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('active');
}

function closeMenu() {
    document.getElementById('mainNav').classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.menu-toggle');
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});
