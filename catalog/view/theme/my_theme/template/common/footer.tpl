<footer>
 <div class="container-fluid">
    <div class="row row-top">
      <div class="container">
        <div class="row">
      <?php if ($informations) { ?>
      <div class="col-sm-3">
        <h5><?php echo $text_information; ?></h5>
        <ul class="list-unstyled">
          <?php foreach ($informations as $information) { ?>
          <li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
          <?php } ?>
        </ul>
      </div>
      <?php } ?>
      <div class="col-sm-3">
        <h5><?php echo $text_service; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
          <li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
          <!--<li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>-->
        </ul>
      </div>
      <div class="col-sm-2">
        <!--<h5><?php echo $text_extra; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
          <li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
          <li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
          <li><a href="<?php echo $special; ?>"><?php echo $text_special; ?></a></li>
        </ul>-->
        <h5>Телефон</h5>
          <div class="site-phone"><?php echo $telephone; ?></div>
      </div>
      <div class="col-sm-4">
        <h2>Заказать звонок</h2>
        <!--<h5><?php echo $text_account; ?></h5>
        <ul class="list-unstyled">
          <li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li>
          <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
          <li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
          <li><a href="<?php echo $newsletter; ?>"><?php echo $text_newsletter; ?></a></li>
        </ul> -->
        <div id="callback" class="callback-form product-popup">
          <p>Введите номер телефона и наш менеджер перезвонит вам в течение <strong>15 минут</strong>.</p>

          <form class="ajax-form">
            <!-- Hidden Required Fields -->
            <input type="hidden" name="project_name" value="H-Dress">
            <input type="hidden" name="admin_email" value="<?php echo $email; ?>">
            <input type="hidden" name="form_subject" value="Заявка с сайта H-Dress">
            <!-- END Hidden Required Fields -->

            <input class="form-control" type="text" name="Имя" placeholder="Введите ваше имя..." required>
            <input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>
            <button class="btn btn-primary btn-footer">Заказать</button>

          </form>

          <div class="success">Спасибо за заявку!</div>
        </div>
      </div>
        </div>
      </div>
    </div>
   <div class="row row-bottom">
     <div class="container">
       <div class="row">
   <div class="col-sm-4 first-col">
    <p><?php echo $powered; ?> <a href="<?php echo $sitemap; ?>"><i class="fa fa-sitemap"></i> <?php echo $text_sitemap; ?></a></p>
   </div>
   <div class="col-sm-4 center-col">
     <nav class="nav-social">
       <ul>
         <li><a href="http://vk.com" rel="nofollow" target="_blank"><i class="fa fa-vk"></i></a></li>
         <li><a href="http://facebook.com" rel="nofollow" target="_blank"><i class="fa fa-facebook"></i></a></li>
         <li><a href="http://instagram.com" rel="nofollow" target="_blank"><i class="fa fa-instagram"></i></a></li>
       </ul>
     </nav>
   </div>
   <div class="col-sm-4 left-col">
     <span>UT Development</span>
   </div>
   </div>
     </div>
   </div>
  </div>
</footer>



</body></html>
