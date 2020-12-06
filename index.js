$(document).ready(function() {

    var $showInputBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn');
    var $saveAgeBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn-save');
    var $inputAge = $('.presentation-wrapper-rght-content').find('.presentation-wrapper-rght-content__input');
    var $actualAge = $('.presentation-wrapper-rght-age').find('.age');
    var $errorAgeMsg = $('.presentation-wrapper-rght-content').find('.error-age');
    var $bars = $('.main-header').find('.bars');
    var $menuHeader = $('.main-header').find('.main-header__menu');
    
    
    //Events
    $showInputBtn.on('click',showInput);
    $saveAgeBtn.on('click', saveAge);
    $bars.on('click',showHeaderMenu);
    
    function showInput() {
        $inputAge.addClass('show-input');
        $saveAgeBtn.css('display','block');
    }
    
    function saveAge() {
    
        if(!$.isNumeric($inputAge.val())){
    
            $errorAgeMsg.css('display','block');
    
        } else {
    
            $actualAge.text($inputAge.val());
            $errorAgeMsg.css('display','none');
            $inputAge.val('');
        }
    }
    
    function showHeaderMenu() {
        $menuHeader.toggleClass('show-bars');
    }

    
        //slick slider code

        $('.wrapper-images').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear'
          });
});


