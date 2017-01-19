// Tar ut elementet så att det är clickbart och tar bort menyn på scroll 
var menuClick = document.getElementsByClassName("navbar-toggle");
var btnNo= document.getElementById("noScrollbtn");
// Scroll Funktionen // 
//-- Scrollhack, ser till att menyn inte stänger sig //
btnNo.addEventListener("click", addClass);

function addClass(){
  btnNo.classList.add("noGo")
  setTimeout(function(){btnNo.classList.remove("noGo");},130);

}


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    var pointer = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      if (btnNo.classList == "btn-page-1 btn-group-justified noGo"){
        return false;
      }
      else{
      menuClick[0].click();
      return false;
    }
    }
  }
});
// Slut Scroll funktionen//


jQuery(function ($) {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});