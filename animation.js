let wrapper = document.querySelector('.animation'),
    marquee = document.querySelector('.animation-img'),   
    wrapperWidth = wrapper.offsetWidth,
    marqueeWidth = marquee.scrollWidth;
    
function move() {
  let currentTX = getComputedStyle(marquee).transform.split(',');
  if( currentTX[3] === undefined ) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  
  if(-currentTX >= marqueeWidth) {
    marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  
  } else {
    marquee.style.transform = 'translateX(' + currentTX + 'px)';
  }
}

let interval = setInterval(move, 10);