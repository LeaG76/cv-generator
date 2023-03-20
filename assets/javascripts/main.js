/* Set picture in url base 64 */

const img = document.getElementById('home-img');

/*fetch('assets/pictures/profile.txt', {
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
})
.then((response) => response.text())
.then((result) => {
    console.log('Success:', result);
    //img.src = result;
})
.catch((error) => {
    console.error('Error:', error);
});*/

/* Show Menu */

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

/* Remove menu mobile */

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll sections active link */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* Show scroll top */

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

/* Light/Dark mode */

const themeButton = document.getElementById('theme-button');
let darkTheme = 'dark-theme';
let darkMode = localStorage.getItem("dark-mode");

function enableDarkMode() {
    document.body.classList.add(darkTheme);
    themeButton.classList.add('fa-sun');
    themeButton.classList.remove('fa-moon');
    localStorage.setItem("dark-mode", "enabled");
};

function disableDarkMode() {
    document.body.classList.remove(darkTheme);
    themeButton.classList.add('fa-moon');
    themeButton.classList.remove('fa-sun');
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

themeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

/* Link PDF Download on Mobile screen depending of the light/dark mode */

const downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', () => {
    if (document.body.classList.contains(darkTheme)) {
        downloadButton.href = "assets/pdf/myResumeCV-dark.pdf";
    } else {
        downloadButton.href = "assets/pdf/myResumeCV-light.pdf";
    }
});

/* Reduce the size and print on an A4 sheet */

function addScaleCV() {
    document.body.classList.add("scale-cv");
}

/* Remote the size when the CV is downloaded */

function removeScaleCV() {
    document.body.classList.remove("scale-cv");
}

/* Generate PDF */

// PDF generated area
let areaCV = document.getElementById('area-cv');

// Button
let resumeButton = document.getElementById("resume-button");

// Generate PDF with html2pdf.js
function generateResume() {
    // PDF filename change depending of the light/dark mode
    if (document.body.classList.contains(darkTheme)) {
        // html2pdf.js options
        let opt = {
            margin: 0,
            filename: 'myResumeCV-dark.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4, useCORS: true },
            jsPDF: { format: 'a4', orientation: 'portrait' }
        };
        html2pdf(areaCV, opt);
    } else {
        // html2pdf.js options
        let opt = {
            margin: 0,
            filename: 'myResumeCV-light.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 4, useCORS: true },
            jsPDF: { format: 'a4', orientation: 'portrait' }
        };
        html2pdf(areaCV, opt);
    }
}

// Action executed by clicking on the button => generation of the final PDF CV CV
resumeButton.addEventListener("click", () => {
    // Adapt the area of the PDF
    addScaleCV();
    // Generate the PDF
    generateResume();
    // Remove adaptation after 1 second (you can choose to set more than 1 second if your PDF download time is long)
    setTimeout(removeScaleCV, 1000);
});