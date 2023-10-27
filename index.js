document.querySelector("#cancel").addEventListener("click", () => {
    // document.getElementById("nav-top").style.backgroundColor = "violet";
    document.getElementById("nav-top").style.display = "none";
})


// scroll
var responsiveSlider = function() {

    var slider = document.getElementById("right-div");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();
    }

// document.querySelector("#right-btn").addEventListener("click", () => {
//     document.getElementById("slider").scrollBy(690, 0)
// })
// document.querySelector("#left-btn").addEventListener("click", () => {
//     document.getElementById("slider").scrollBy(-690, 0)
// })


// books scroll
document.querySelector("#next1").addEventListener("click", () => {
    document.getElementById("books").scrollBy(700, 0)
    document.getElementById("books1").scrollBy(700, 0)
})
document.querySelector("#prev1").addEventListener("click", () => {
    document.getElementById("books").scrollBy(-705, 0)
    document.getElementById("books1").scrollBy(-705, 0)
})

document.querySelector("#next2").addEventListener("click", () => {
    document.getElementById("books-scroll-1").scrollBy(660, 0)
})
document.querySelector("#prev2").addEventListener("click", () => {
    document.getElementById("books-scroll-1").scrollBy(-660, 0)
})



// slideshow
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("c1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 4000); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("c2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 4250); // Change image every 2 seconds
}

let slideIndex3 = 0;
showSlides3();

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("c3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) { slideIndex3 = 1 }
    slides[slideIndex3 - 1].style.display = "block";
    setTimeout(showSlides3, 4500); // Change image every 2 seconds
}

document.querySelector("#btn").addEventListener("click", () => {
    if (document.querySelector(".link-top-desc").style.display == "none") {
        document.querySelector(".link-top-desc").style.display = "flex"
    } else {
        document.querySelector(".link-top-desc").style.display = "none"
    }
})

// function display(){
//     if(document.querySelector(".head").style.display == "none"){
//         document.querySelector(".haed").style.display = "block"
//     }
// }


// function cancel(){
//     document.getElementById("nav-top").style.display = "none";
// }

// function cancel(){
//     // document.getElementById("nav-top").style.display = "none";
//     document.getElementById("nav-top").style.backgroundColor = "violet";
// }





function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function disable(){
  document.querySelector('#books').addEventListener('wheel', preventScroll);
  document.querySelector('#books1').addEventListener('wheel', preventScroll);
  document.querySelector('#books-scroll-1').addEventListener('wheel', preventScroll);
}


document.querySelector('#prev').addEventListener('click', disable);
document.querySelector('#next').addEventListener('click', disable);
document.querySelector('#prev2').addEventListener('click', disable);
document.querySelector('#next2').addEventListener('click', disable);