let lastScroll = 0;
let currentSection = 0;
let ticking = false;
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const sections = document.getElementsByClassName('section');
console.log("TCL: sections", sections);

window.onload = function get_body() {
  body = document.getElementsByTagName('body')[0];
  body.classList.add('page-viewing-01');
}

const scrollSectionIntoView = () => {
  if (lastScroll < window.pageYOffset && currentSection < sections.length-1) {
    currentSection++;
  }
  else if (lastScroll > window.pageYOffset && currentSection > 0) {
    currentSection--;
  }
  sections[currentSection].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  lastScroll = window.pageYOffset;
}

window.addEventListener('scroll', () => {
  if(!ticking) {
    ticking = true;
    setTimeout(() => {
      ticking = false
    },500);
    scrollSectionIntoView();
  }
});