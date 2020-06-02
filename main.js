const sections = document.querySelectorAll('.link');
const bg = document.querySelector('.bg');


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      className = entry.target.classList[1];
      console.log(className);
      if (entry.isIntersecting) {
        if (className === 'bike') {
          bg.innerHTML = 'BIKE BUILDER';
        } else if (className === 'contact') {
          bg.innerHTML = 'CONTACT TRACING';
        } else if (className === 'snake') {
          bg.innerHTML = 'SNAKE GAME';
        } else if (className === 'fourth') {
          bg.innerHTML = 'FOURTH';
        } else if (className === 'corona') {
          bg.innerHTML = 'FIFTH';
        } else if (className === 'calculator') {
          bg.innerHTML = 'SIXTH';
        }
      } else {
      }
    })
  });
  
section.forEach(section => {
observer.observe(section);
});