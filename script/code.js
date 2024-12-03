   // Carousel Functionality
   const slides = document.querySelector('.carousel-slides');
   const slideImages = document.querySelectorAll('.carousel-slide');
   const prevBtn = document.querySelector('.prev-btn');
   const nextBtn = document.querySelector('.next-btn');
   let currentSlide = 0;
   function showSlide(index) {
     const totalSlides = slideImages.length;
     if (index < 0) {
       currentSlide = totalSlides - 1;
     } else if (index >= totalSlides) {
       currentSlide = 0;
     } else {
       currentSlide = index;
     }
     const offset = -currentSlide * 100;
     slides.style.transform = `translateX(${offset}%)`;
   }
   prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
   nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
   // Auto-slide every 5 seconds
   setInterval(() => showSlide(currentSlide + 1), 5000);