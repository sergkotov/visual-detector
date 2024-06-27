//lazy loading by visibility detector
const options = {threshold: 0.3}

function vdHandler(elements, detector) {
    elements.forEach((data) => {
        if(data.isIntersecting) {
            data.target.setAttribute('src', data.target.getAttribute('data-src'));
            detector.unobserve(data.target);
        }
    });
}

const observer = new IntersectionObserver(vdHandler, options);
const collectionImgs = document.querySelectorAll('section img');
collectionImgs.forEach((el) => {
    observer.observe(el);
});

//opacity detector
const options2 = {
    threshold: [0.2, 0.4, 0.6, 0.8, 1.0],
    rootMargin: '20px 0px',
}

function vdHandler2(elements, detector) {
    elements.forEach((data) => {
        data.target.style.opacity = 0.2 + data.intersectionRatio * 0.8;
    });
}

const observer2 = new IntersectionObserver(vdHandler2, options2);
collectionImgs.forEach((el) => {
    observer2.observe(el);
});