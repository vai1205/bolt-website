function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// application
var speed = 75;
var h2 = document.querySelector('h2');
var span = document.querySelector('span');
// var p = document.querySelector('p');
var delay = h2.innerHTML.length * speed + speed;
var delay = span.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h2, speed);
// type affect to span
typeEffect(span, speed);


// type affect to body
// setTimeout(function(){
//   p.style.display = "inline-block";
//   typeEffect(p, speed);
// }, delay);

