$(document).ready(function(){


var wHeight = $(window).height();
$('.travel-head').height(wHeight);
$(window).resize(function(){
    var wHeight = $(window).height();
    $('.travel-head').height(wHeight);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header').addClass("sticky");
    }
    else{
        $('.header').removeClass("sticky");
    }
});


// Load more Activity
$('.travel-activity .travel-activity-inner').each(function(){
  var LiN = $(this).find('.travel-activity-item').length;
  if( LiN > 3){
    $('.travel-activity-item', this).eq(8).nextAll().hide().addClass('toggleable');
  }
});

$('.travel-activity .btn-holder .btn-green').on('click', function(e){
  $('.travel-activity-inner').find('.travel-activity-item.toggleable').slideToggle();
  $('.travel-activity .btn-holder').slideUp();
  e.preventDefault();
});

// Load more Gallery
$('.travel-gallery .travel-gallery-inner').each(function(){
  var LiN = $(this).find('.travel-gallery-item').length;
  if( LiN > 3){
    $('.travel-gallery-item', this).eq(5).nextAll().hide().addClass('toggleable');
  }
});

$('.travel-gallery .btn-holder .btn-green').on('click', function(e){
  $('.travel-gallery-inner').find('.travel-gallery-item.toggleable').slideToggle();
  $('.travel-gallery .btn-holder').fadeOut();
  e.preventDefault();
});


});