/**
 * Created by user on 5/21/2017.
 */
$(document).ready(function(){
  $('.col-sm-9 > nav ul li a').each(function(){
    if(this.href == window.location.href) {
      $('li a').removeClass("active");
      $(this).addClass("active");
    }
  });
});
