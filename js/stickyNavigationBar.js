const stickyNavBar = document.querySelector('.navigation-bar');
const navBarOffsetPosition = stickyNavBar.offsetTop;


window.onscroll = () => window.scrollY > navBarOffsetPosition 
    ? stickyNavBar.classList.add('sticky-navigation-bar') 
    : stickyNavBar.classList.remove('sticky-navigation-bar');
