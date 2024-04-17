const animTexts = document.querySelectorAll('.animText');

const observerCallback = (entries, observer) => {
 entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim');
      observer.unobserve(entry.target);
    }
 });
};
// экземпляр IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
 rootMargin: '0px',
 threshold: .5
});


for(let animText of animTexts){
    observer.observe(animText);
}

