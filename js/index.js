var $showInputBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn');
var $saveAgeBtn = $('.presentation-wrapper-rght-age').find('.presentation-wrapper-rght-age__btn-save');
var $inputAge = $('.presentation-wrapper-rght-content').find('.presentation-wrapper-rght-content__input');
var $actualAge = $('.presentation-wrapper-rght-age').find('.age');


//Events
$showInputBtn.on('click',showInput);
$saveAgeBtn.on('click', saveAge);
$inputAge.on('change',showSaveBtn);

function showInput() {
    $inputAge.addClass('show-input');
}

function saveAge() {
    
    if($inputAge.val() == "") {
        alert('please fill out the field');
    } else {
        $actualAge.text($inputAge.val());
    }
    
    setTimeout(function() {
        $inputAge.val('');
        $saveAgeBtn.css('display','none');
    },500)
}

function showSaveBtn() {
    $saveAgeBtn.css('display','block');
}