const menuButton1 = document.querySelector(".menu-btn")
const mobileMenuScroll = document.querySelector(".mobile-nav")
const closeButton = document.querySelector(".menu-btn-close")

menuButton1.addEventListener("click", function(){
    mobileMenuScroll.style.display = "block"
    closeButton.style.display = "block"
    menuButton1.style.display = "none"
})

closeButton.addEventListener("click", function(){
    mobileMenuScroll.style.display = "none"
    closeButton.style.display = "none"
    menuButton1.style.display = "block"
})



/* SLIDER */

const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const slides = document.querySelectorAll(".slide")
const slideIcons = document.querySelectorAll(".slide-icon")
const numberOfSlides = slides.length
let slideNumber = 0


// image slider next btn

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    })

    slideNumber++

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0
    }

    slides[slideNumber].classList.add("active")
    slideIcons[slideNumber].classList.add("active")
})

// image slider prev

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active")
    })

    slideNumber--

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1
    }

    slides[slideNumber].classList.add("active")
    slideIcons[slideNumber].classList.add("active")
})