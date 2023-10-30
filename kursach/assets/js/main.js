const nextBtn = document.querySelector('.next')
const backBtn = document.querySelector('.back')
const slides = document.querySelector('.slides')
const countS1 = document.querySelectorAll('.slide').length

let width = 1440
let left = 0

function slide(){
	left = (left - width)
    if(left > -(countS1*width)){
        slides.style.left = left + 'px'
    }else{
        left = 0;
        slides.style.left = '0px'
    }
}
var timer = 0;
 makeTimer(); //Создаем интервал 
 function makeTimer(){
    timer = setInterval(function(){
      slide()
    }, 5000);
  }