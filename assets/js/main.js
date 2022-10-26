//creare un array con images
//inserire immagini con array e for
//creare classe per img attiva
const slidesImgs = [
'./assets/img/01.webp',
'./assets/img/02.webp',
'./assets/img/03.webp',
'./assets/img/04.webp',
'./assets/img/05.webp'
];
const firstSlideImg = slidesImgs[0];
console.log(firstSlideImg)
const slideEl = document.querySelector('.slides');
let activeImg = 0;
console.log(activeImg)

for (i=0; i < slidesImgs.length; i++){
    const slideSrc = slidesImgs[i];
    const slidesMarkUp = `<img class="${i === activeImg ? 'active' : ''}" src="${slideSrc}" alt="">`;
    slideEl.insertAdjacentHTML('beforeend', slidesMarkUp);
}

//seleziono bottoni next e prev
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');


//ascolto per prev click
prevBtn.addEventListener('click', function (){
    //cerco slide attiva
    const currentSlide = document.querySelector('.slides > img.active');
    console.log(currentSlide);
    //tolgo classe e decremento di uno 
    currentSlide.classList.remove('active');
    activeImg--
    if (activeImg < 0){
        activeImg = slidesImgs.length - 1;
    }
    //seleziono precedente e applico classe active
    const allSlides = document.querySelectorAll('.slides > img');
    console.log(allSlides);
    const prevSlide = allSlides[activeImg];
    prevSlide.classList.add('active');
    
})

//ascolto per next click
nextBtn.addEventListener('click', function (){
    //cerco slide attiva
    const currentSlide = document.querySelector('.slides > img.active');
    console.log(currentSlide);
    //tolgo classe e aumenta di uno 
    currentSlide.classList.remove('active');
    activeImg++
    if (activeImg === slidesImgs.length){
        activeImg = 0;
    }
    //seleziono successiva e applico classe active
    const allSlides = document.querySelectorAll('.slides > img');
    console.log(allSlides);
    const nextSlide = allSlides[activeImg];
    nextSlide.classList.add('active');
    
})

