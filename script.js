const lamp = document.getElementById('lamp');
let isOn = false;

function toggleLamp() {
    isOn = !isOn;
    lamp.classList.toggle('on');
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = isOn ? '0.2' : '1';
        section.style.transform = isOn ? 'scale(0.95)' : 'scale(1)';
    });
    document.body.style.background = isOn ? '#2c2c2e' : '#0a0a0a';
    lamp.style.transform = isOn ? 'rotate(15deg)' : 'rotate(0)';
}

// Add click event to nav logos for smooth scrolling
document.querySelectorAll('.nav-logo').forEach(logo => {
    logo.addEventListener('click', () => {
        const sectionId = logo.getAttribute('data-section');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});
