// Humburger Button
const mainMenu = document.querySelector(".nav-menu");
const humburgerBtn = document.querySelector("#menuIcon");
const humburgerClose = document.querySelector("#closeX");
// Accordion
const accordionItems = document.querySelectorAll('.accordionItems');







// Humburger Function
humburgerBtn.addEventListener("click", ()=>{
    mainMenu.classList.add("active");
    humburgerBtn.classList.add("active");
    humburgerClose.classList.add("active");
})
humburgerClose.addEventListener("click", ()=>{
  mainMenu.classList.remove("active");
  humburgerBtn.classList.remove("active");
  humburgerClose.classList.remove("active");
})

// Accordion Function
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const plusBtn = item.querySelector('.plusbtn');
  const closeBtn = item.querySelector('.closebtn');

  header.addEventListener("click", ()=>{
    content.classList.toggle('active');
    if(content.classList.contains('active')){
        closeBtn.classList.add('active');
        plusBtn.classList.add('active');
    }else{
        closeBtn.classList.remove('active');
        plusBtn.classList.remove('active');
    }
  })
});


// ChatGPT
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let slideIndex = 0;

// function showSlide(index) {
//   slider.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextSlide() {
//   if (slideIndex < slider.children.length - 1) {
//     slideIndex++;
//     showSlide(slideIndex);
//   }
// }

// function prevSlide() {
//   if (slideIndex > 0) {
//     slideIndex--;
//     showSlide(slideIndex);
//   }
// }

// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);