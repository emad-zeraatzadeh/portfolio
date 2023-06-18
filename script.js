const hiddenElements = document.querySelectorAll(".hidden");
const arrowUp = document.querySelector('.arrow');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

hiddenElements.forEach((el) => observer.observe((el)));


arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' });
});

function handleScroll() {
    if (window.pageYOffset > 500) {
        arrowUp.classList.add('show-arrow');
    } else {
        arrowUp.classList.remove('show-arrow');
    }
}

window.addEventListener('scroll', handleScroll);