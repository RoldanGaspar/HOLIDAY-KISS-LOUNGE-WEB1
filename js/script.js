let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let index = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  function showSlide() {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  }

// Get in Touch with us 

function Clear(){
  let Delete = document.getElementById('num1')
  let Delete2  = document.getElementById('mail');
  let Delete3 = document.getElementById('message');
  Delete.value="";
  Delete2.value="";
  Delete3.value="";
}

function send(){
  alert("Thank you for reaching out! We genuinely appreciate your message and the opportunity to assist you.");
}