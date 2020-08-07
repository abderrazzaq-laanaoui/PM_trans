let slides = document.querySelector(".slider-items").children;
let nextSlide = document.querySelector(".right");
let prevSlide = document.querySelector(".left");
let ttlSlides = slides.length;

nextSlide.onclick = function () {
    next("next")
}


prevSlide.onclick = function () {
    next("prev")
}

let index = 0
function next(dir) {
    if (dir =="next") {
        index++;
        if (index == ttlSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index=ttlSlides-1;
        }else{
            index--;
        }

        
    }
    
    for (let i = 0; i < slides.length; i++) {
       slides[i].classList.remove("active");
        
    }
    slides[index].classList.add("active");
};