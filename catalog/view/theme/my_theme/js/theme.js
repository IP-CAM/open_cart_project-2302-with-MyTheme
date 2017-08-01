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
    //купить в один клик
    var img_url = $(this).find('.img-responsive').attr('src'),
				item_name = $(this).find('h4 a').text(),
				item_price = $(this).find('.price').html(),
				admin = $('#callback [name=admin_email]').val();

		$(this).after('\
		<div id="current-item-' + current + '" class="product-popup">\
			<div class="current-img-wrap"><img src="' + img_url + '" alt="Одежда"></div>\
			<div class="current-content">\
				<h3>' + item_name + '</h3>\
				<p>' + item_price + '</p>\
				<form class="ajax-form">\
					<input type="hidden" name="project_name" value="IphoneService">\
	        <input type="hidden" name="admin_email" value="' + admin + '">\
	        <input type="hidden" name="form_subject" value="Заявка с сайта H-Dress">\
	        <input type="hidden" name="Продукт" value="' + item_name + '">\
          <input class="form-control" type="text" name="Имя" placeholder="Введите ваше имя..." required>\
	        <input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>\
          <input class="form-control" type="text" name="Размер" placeholder="Укажите ваш размер..." required>\
	         <button class="btn btn-primary">Заказать</button>\
				</form>\
				<div class="success"><p>Спасибо за заявку!</p><p>Наш менеджер свяжется с Вами в течении 10 минут</p></div>\
			</div>\
		</div>');

    $(this).find('.button-group').append('<a class="button-toclick" href="#current-item-'+ current +'"><span class="click-one">Купить в один клик</span></a>');
    $(this).parent().attr({
      'class': 'product-layout col-lg-4 col-md-4 col-sm-6 col-xs-12'
    });
  })


  $('.button-toclick').magnificPopup({
  		mainClass: 'mfp-zoom-in',
  		removalDelay: 400
  	});
    //E-mail Ajax Send
	$(".ajax-form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "catalog/view/theme/my_theme/mail.php",
			data: th.serialize()
		}).done(function() {
			var pp_suc = th.closest('.product-popup').find('.success');
      var pp_btn = th.closest('.product-popup').find('.btn-footer');
			pp_suc.fadeIn();
      pp_btn.hide();
			setTimeout(function() {
				th.trigger("reset");
				pp_suc.hide();
        pp_btn.show();
				$.magnificPopup.close();
			}, 2600);
		});
		return false;
	});
  //добавление элемента "акция" к айтему товара
  $('.product-layout > .product-thumb').each(function () {
    if($(this).find('.price-old').length > 0) {
      $(this).find('.ribbon').prepend('<span class="stock">SALE</span>');
    } else return;
  })
  //добавление кастомного класса для правильных отступов
  if(!window.location.href.indexOf("index.php?route=common/home") > -1) { //находим все старнички кроме главной (где есть сортировка)
    $("#content > div:nth-of-type(1)").attr({
      "class" : "row row-sort"
    });
  }

  $(".caption").css({'height' : ''}).equalHeight();
});
