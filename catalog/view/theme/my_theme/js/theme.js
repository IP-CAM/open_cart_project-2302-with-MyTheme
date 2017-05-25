/**
 * Created by user on 5/21/2017.
 */
//добавление активного класса к пунктам меню
$(document).ready(function(){
  $('.col-sm-9 > nav ul li a').each(function(){
    if(this.href == window.location.href) {
      $('li a').removeClass("active");
      $(this).addClass("active");
    }
  });
  //увеличение ширины стандартных айтемов товаров (col-lg-3 -> col-lg-4)
  $('.product-layout > .product-thumb').each(function (current) {
    current += 1;
    $(this).find('.button-group').append('<a class="button-toclick" href="#current-item-'+ current +'">Купить в один клик</a>');
    $(this).parent().attr({
      'class': 'product-layout col-lg-4 col-md-4 col-sm-6 col-xs-12'
    });
  })
  //добавление элемента "акция" к айтему товара
  $('.product-layout > .product-thumb').each(function () {
    if($(this).find('.price-old').length > 0) {
      $(this).find('.image').prepend('<div class="stock">SALE</div>');
    } else return;
  })
});
