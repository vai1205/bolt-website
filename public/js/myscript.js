    
// $('.btn').on('click', function(){
//   alert('hi')
// })
// $ ('#mobile-development-view').on('click', function(){
//   window.location.replace('/view')
// })
$('#bolt-logo-b').hide()
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
              $('#bolt-logo-b').show()
            } else{
              $('#menu').show()
              $('#bolt-logo-b').hide()
              $('#navbar2').removeClass('nav2-on-top')
            }
        }, 250);
    }
});
$('#bolt-logo-b').on('click', function(){
  window.location.replace('/')
})
selectedCategory = undefined;
$('.nav2-item').on('click', function(){
  $('.nav2-item').removeClass('active')
  selectedCategory = $(this).attr('id')
  $('#nav2-input').attr('value', selectedCategory)
  $('#nav2-form').submit()
  $('#'+ selectedCategory).addClass('active')
})
