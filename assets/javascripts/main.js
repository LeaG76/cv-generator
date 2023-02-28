/* Show Menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/* Remove menu mobile */

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll sections active link */

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);