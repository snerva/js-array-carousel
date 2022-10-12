//creare un array con images
//inserire immagini con array e for
//creare classe per img attiva
const slidesImgs = [
'assets/img/01.webp',
'assets/img/02.webp',
'assets/img/03.webp',
'assets/img/04.webp',
'assets/img/05.webp'
];

const slideEl = document.querySelector('.slides');
let activeImg = 0;

for (i=0; i < slidesImgs.length; i++){
    const slideSrc = slidesImgs[i];
    const slidesMarkUp = `<img class="${i === activeImg ? 'active' : ''}" src="${slideSrc}" alt="">`;
    slideEl.insertAdjacentHTML('beforeend', slidesMarkUp);
}

//seleziono bottoni next e prev
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
console.log(prevBtn);
//ascolto per click
prevBtn.addEventListener('click', function (){
    //cerco slide attiva
    const slidesImgs = document.getElementsByClassName('.activeImg');
    const currentSlide = slidesImgs[activeImg];
    //tolgo classe e incremento di uno 
    currentSlide.classList.remove('active');
    activeImg--;
    //seleziono la penultima e applico classe active
    const prevSlide = slidesImgs[activeImg];
    prevSlide.classList.add('active');
})

//ripeto azione di ascolto per next
nextBtn.addEventListener('click', function (){
    //cerco slide attiva
    const slidesImgs = document.getElementsByClassName('.activeImg');
    const currentSlide = slidesImgs[activeImg];
    //tolgo classe e incremento di uno 
    currentSlide.classList.remove('active');
    activeImg++;
    //seleziono la penultima e applico classe active
    const nextSlide = slidesImgs[activeImg];
    nextSlide.classList.add('active');
})