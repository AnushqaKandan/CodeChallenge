$(document).ready(function () {
  const $slides = $('.carousel-slides');
  const $slideImages = $('.carousel-slide');
  const $prevBtn = $('.prev-btn');
  const $nextBtn = $('.next-btn');
  const $paginationSpans = $('.pagination span');
  
  let currentSlide = 0;
  
  // Function to show the current slide
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

    // Update pagination indicator
    $paginationSpans.removeClass('active').eq(currentSlide).addClass('active');
  }

  // Event listener for the next and previous buttons
  $prevBtn.on('click', function () {
    showSlide(currentSlide - 1);
  });
  
  $nextBtn.on('click', function () {
    showSlide(currentSlide + 1);
  });
  
  // Event listeners for pagination click
  $paginationSpans.on('click', function () {
    currentSlide = $(this).index();
    showSlide(currentSlide);
  });


  // Initialize carousel by showing the first slide
  showSlide(currentSlide);
  
  // Burger menu logic
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

    

    // Auto-slide every 5 seconds
    // setInterval(function () {
    //   showSlide(currentSlide + 1);
    // }, 5000);