// Tar ut elementet så att det är clickbart och tar bort menyn på scroll 
var menuClick = document.getElementsByClassName("navbar-toggle");
// Scroll Funktionen // 

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      menuClick[0].click();
      return false;
    }
  }
});
// Slut Scroll funktionen//
