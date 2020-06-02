const sections = document.querySelectorAll('.link');
const bg = document.querySelector('.bg');
console.log(sections);

const options = {
    root: null,
    threshold: 0,
    rootMargin: ''
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            if (entry.target.classList[1] === 'bike') {
                bg.innerHTML = 'BIKE BUILDER';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'contact') {
                bg.innerHTML = 'CONTACT TRACING';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'contact') {
                bg.innerHTML = 'CONTACT TRACING';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'snake') {
                bg.innerHTML = 'SNAKE GAME';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'corona') {
                bg.innerHTML = 'CORONA TIMER';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'calculator') {
                bg.innerHTML = 'CALCULATOR';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'to-do') {
                bg.innerHTML = 'TO-DO APP';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            } else if (entry.target.classList[1] === 'canvas') {
                bg.innerHTML = 'CANVAS CIRCLES';
                entry.target.classList.remove('.fadeOut');
                entry.target.classList.add('.fadeIn');
            }
        }
    })
})

sections.forEach(section => {
    observer.observe(section);
})