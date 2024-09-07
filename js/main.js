$(document).ready(function() {
  AOS.init({
    duration: 1200,
  })
});

document.addEventListener("DOMContentLoaded", function() {
  document.title = MAIN_TITLE;
});


/**
 * add header scroll class
 */
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll >= 50){
    $('.header').addClass('scroll')
  }else{
    $('.header').removeClass('scroll')
  }
});

/**
 * nav click event
 * @param id
 */
function navMove(id){
  var offset = $("#" + id).offset().top;
  if (window.innerWidth < 768) {
    $('html, body').animate({scrollTop : offset - 70}, 400);
  }else{
    $('html, body').animate({scrollTop : offset}, 400);
  }
}
