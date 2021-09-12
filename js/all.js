$(document).ready(function() {
   
   $('.switch_en').click(function (e) { 

       $('.switch_en').css('background','gray').css('color','black').addClass('animate__bounce');

       $('.switch_ch').css('background','black').css('color','white').removeClass('animate__bounce');
      
       $('.ch').addClass('close');
       $('.en').removeClass('close');
      
   });



   $('.switch_ch').click(function (e) { 

      $('.switch_ch').css('background','gray').css('color','black').addClass('animate__bounce');

      $('.switch_en').css('background','black').css('color','white').removeClass('animate__bounce');

      $('.ch').removeClass('close');
      $('.en').addClass('close');
     
  });

  $('.link').hover(
    function() {
      $( this ).addClass('animate__heartBeat');
    }, function() {
      $( this ).removeClass('animate__heartBeat');
  });

  $('.toTop').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ 
      scrollTop: 0,
    }, 700)
  });

  $('.toTop').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0,
    }, 700)
  });

  $('.icon_wrap').on('click','a', function (e) {
    e.preventDefault();
    const anchor = $(this).attr('href');
    const linkScroll = $(anchor).offset().top;
    $('html,body').stop().animate({ 
      scrollTop: linkScroll -0
    },700)
  });

  $("a[href$='mail.com']").addClass('far fa-envelope');

});