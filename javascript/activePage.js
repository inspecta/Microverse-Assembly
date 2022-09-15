const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  console.log(link)
  console.log()
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})