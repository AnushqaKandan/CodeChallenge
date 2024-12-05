$(document).ready(function () {
    const $slides = $('.carousel-slides');
    const $slideImages = $('.carousel-slide');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');
    let currentSlide = 0;
  
    function showSlide(index) {
      const totalSlides = $slideImages.length;
  
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }
  
      const offset = -currentSlide * 100;
      $slides.css('transform', `translateX(${offset}%)`);
    }
  
    $prevBtn.on('click', function () {
      showSlide(currentSlide - 1);
    });
  
    $nextBtn.on('click', function () {
      showSlide(currentSlide + 1);
    });
  
    // Auto-slide every 5 seconds
    // setInterval(function () {
    //   showSlide(currentSlide + 1);
    // }, 5000);
  });
  