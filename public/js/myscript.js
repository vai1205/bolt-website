    
// $('.btn').on('click', function(){
//   alert('hi')
// })
// $ ('#mobile-development-view').on('click', function(){
//   window.location.replace('/view')
// })

$('.modal-btn').on('click',()=>{
  $('#hireModal').modal('show')
})
$('.modal-btn-demo-link').on('click',()=>{
  window.open('http://boltcloud.co.in/demo-sms/')
})
$('#appDemo').on('click',()=>{
  window.open('http://boltcloud.co.in/apps/shopping.apk')
})
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


