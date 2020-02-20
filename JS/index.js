const menu = document.querySelector('.burger-menu-container');
const skillsBar = document.querySelector('.skills-bar-wrapper');
let menuIsOpen = false;

const menuControl = () => {
    menu.addEventListener('click', toggleMenu);
}

const toggleMenu = () => {
    const links = document.querySelector('.burger-links-container');

    menu.classList.toggle('change');

    if (menuIsOpen) {
        links.style.display = 'none';
        menuIsOpen = false;
    } else {
        links.style.display = 'block';
        menuIsOpen = true;
    }
}

menuControl();
animateSkillsBar();