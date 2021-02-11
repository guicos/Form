
function mostrar(){
    const slider = document.querySelectorAll('[data-js="carouserl_item"]');
    const nextButton = document.querySelector('[data-js="carouserl_button--next"]');
    const prevButton = document.querySelector('[data-js="carouserl_button--prev"]')
    
    let currentSlideIndex = 0;
    let currentSlideIndexNew = 1;
  
    const slidesClasses = (currentSlideIndex, currentSlideIndexNew) =>{
      slider.forEach(slide => {
        slide.classList.remove('carousel_item--visible')
      })

      if(document.getElementById("width").offsetWidth == 280){
        slider[currentSlideIndex].classList.add('carousel_item--visible')
      }else{
        slider[currentSlideIndex].classList.add('carousel_item--visible')
        slider[currentSlideIndexNew].classList.add('carousel_item--visible')
      }
    }
  
    nextButton.addEventListener('click', () =>{
      const correctSlideIndex = currentSlideIndex === slider.length - 1 || currentSlideIndexNew === slider.length - 1 
      ? (currentSlideIndex = 0, currentSlideIndexNew = 1) 
      : (currentSlideIndex++, currentSlideIndexNew++)
      slidesClasses(currentSlideIndex,currentSlideIndexNew)
    })
  
    prevButton.addEventListener('click', () =>{
    const correctSlideIndex = currentSlideIndex === 0 || currentSlideIndexNew === 1 
      ? (currentSlideIndex = slider.length - 1, currentSlideIndexNew = slider.length - 2) 
      : (--currentSlideIndex, --currentSlideIndexNew) 
    slidesClasses(currentSlideIndex,currentSlideIndexNew)
    });
  }