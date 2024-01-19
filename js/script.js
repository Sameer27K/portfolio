// script.js
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.getElementById('menu-icon');
  
    if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
      menuIcon.style.right = '20px';
    } else {
      sidebar.style.width = '250px';
      menuIcon.style.right = '250px';
    }
  }