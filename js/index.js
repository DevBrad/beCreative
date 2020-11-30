var $showInputBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn');
var $saveAgeBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn-save');
var $inputAge = $('.presentation-wrapper-rght-content').find('.presentation-wrapper-rght-content__input');
var $actualAge = $('.presentation-wrapper-rght-age').find('.age');

$showInputBtn.on('click', function() {
    $inputAge.toggleClass('show-input')
});

$saveAgeBtn.on('click',function() {
    $actualAge.text($inputAge.val());
    
    setTimeout(function() {
        $inputAge.val('');
    },500)
});