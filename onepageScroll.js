let lastScroll = 0;
let currentSection = 0;
let ticking = false;

const sections = document.getElementsByClassName('section');
console.log("TCL: sections", sections);

window.onload = function get_body() {
  body = document.getElementsByTagName('body')[0];
  body.classList.add('page-viewing-01');
}

const scrollSectionIntoView = () => {
  if (lastScroll < window.pageYOffset && currentSection < sections.length-1) {
    currentSection++;
    sections[currentSection].scrollIntoView();
  }
  else if (lastScroll > window.pageYOffset && currentSection > 0) {
    currentSection--;
    sections[currentSection].scrollIntoView();
  }
  console.log('CurrentSection', currentSection);
  lastScroll = window.pageYOffset;
}

// window.addEventListener('scroll', () => {
//     if (lastScroll < window.pageYOffset) {
//       window.scrollBy(0, window.innerHeight);
//     }
//     else if (lastScroll > window.pageYOffset) {
//       window.scrollBy(0, window.innerHeight * -1);
//     }
//     lastScroll = window.pageYOffset;
//     console.log("TCL: window.pageYOffset", window.pageYOffset)
// });

window.addEventListener('scroll', () => {
  scrollSectionIntoView();
});