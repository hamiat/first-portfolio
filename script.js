let projectsBtn = document.querySelector('#my-projects');
let aboutBtn = document.querySelector('#about-me');
let contactBtn = document.querySelector('#contact-me');
let projects = document.querySelector('.projects');
let projectsHeader = document.querySelector('#my-projects');
let projectsSections = document.querySelector('.projects-head');
let aboutMe = document.querySelector('.about-me-text');
let aboutHeader = document.querySelector('#about-me');
let aboutSection = document.querySelector('.about');
let contactForm = document.querySelector('.contact-form');
let contactHeader = document.querySelector('#contact-me');
let contactSection = document.querySelector('#contact');

projectsBtn.addEventListener('click', showProjects); 
aboutBtn.addEventListener('click', showAbout);
contactBtn.addEventListener('click', showContact);


function showProjects () {
    projects.style.display = "inline-block";
    projectsHeader.classList.add('projects-heading');
    projectsSections.classList.add('projects-paint')
}

function showAbout() {
    aboutMe.style.display = "flex";
    aboutHeader.classList.add('about-heading');
    aboutSection.classList.add('about-paint');
    
}

function showContact() {
    contactForm.style.display =  "grid";
    contactHeader.classList.add('contact-heading');
    contactSection.classList.add('contact-paint');

}