    
$('.btn').on('click', function(){
  alert('hi')
})

var target = $('#navbar2').offset().top,
    timeout = null;

$(window).scroll(function () {
    if (!timeout) {
        timeout = setTimeout(function () {            
            clearTimeout(timeout);
            timeout = null;
            if ($(window).scrollTop() >= target) {
              $('#menu').hide()
              $('#navbar2').addClass('nav2-on-top')
            } else{
              $('#menu').show()
              $('#navbar2').removeClass('nav2-on-top')
            }
        }, 250);
    }
});
