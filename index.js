
const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav a')
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add(`active`);
    } 
});
// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll('nav a');

//     // Function to handle click events on navigation links
//     function handleNavClick(event) {
//         // Remove the 'active' class from all navigation links
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add the 'active' class to the clicked link
//         event.target.classList.add('active');
//     }

//     // Add click event listeners to navigation links
//     navLinks.forEach(link => {
//         link.addEventListener('click', handleNavClick);
//     });
// });
