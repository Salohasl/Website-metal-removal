/* Для всплывающего окна */ 
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('nav');
let link = document.querySelector('.link');
menuBtn.addEventListener('click', () =>{
menuBtn.classList.toggle('active');
menu.classList.toggle('popUp');
});
document.addEventListener('click', function(event) {
    // Проверяем, что клик произошел вне меню и кнопки открытия
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        // Закрываем меню, добавляя класс, который изменяет его видимость или другие свойства
        menu.classList.remove('popUp');
        menuBtn.classList.remove('active');
    }
});


function showScrollUp(){
  const upBtn = document.querySelector('.up');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
      upBtn.classList.add('active');
    }else{
      upBtn.classList.remove('active');
    }
  })
}
showScrollUp();

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


var swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const containerTwo = document.querySelector('.containerTwo');
function showForm(){
  const btn = document.querySelectorAll('.showForm');
  const titles = document.querySelectorAll('.title');
  const valueInput = document.getElementById('text');
  btn.forEach(btnCLick => {
    btnCLick.addEventListener('click', ()=>{
      for(let title of titles){
        if(title.dataset.id == btnCLick.dataset.id){
          valueInput.value = title.textContent;
        }
      }
      containerTwo.classList.add('active');
    })
  })
}
showForm();
function noShowForm(){
  containerTwo.classList.remove('active');
}