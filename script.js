let projectsBtn = document.querySelector('#my-projects');
let aboutBtn = document.querySelector('#about-me');
let contactBtn = document.querySelector('#contact-me');
let projects = document.querySelector('.projects');
let aboutMe = document.querySelector('.about-me-text');
let contactForm = document.querySelector('.contact-form');

projectsBtn.addEventListener('click', showProjects); 
aboutBtn.addEventListener('click', showAbout);
contactBtn.addEventListener('click', showContact);


function showProjects () {
    projects.style.display = "inline-block";
}

function showAbout() {
    aboutMe.style.display = "flex";
    
}

function showContact() {
    contactForm.style.display =  "grid";

}