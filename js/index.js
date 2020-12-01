var $showInputBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn');
var $saveAgeBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn-save');
var $inputAge = $('.presentation-wrapper-rght-content').find('.presentation-wrapper-rght-content__input');
var $actualAge = $('.presentation-wrapper-rght-age').find('.age');
var $errorAgeMsg = $('.presentation-wrapper-rght-content').find('.error-age');


//Events
$showInputBtn.on('click',showInput);
$saveAgeBtn.on('click', saveAge);

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
