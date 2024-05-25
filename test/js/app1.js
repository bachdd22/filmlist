export var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });


export const ball = document.querySelector(".toggle-ball");
export const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
if(ball){
    ball.addEventListener("click", () => {
        if(items){
            items.forEach((item) => {
                item.classList.toggle("active");
              });
        }
        ball.classList.toggle("active");
      });
      
}

export const like = document.querySelector(".fa-heart");
if(like){
    like.addEventListener("click", () => {
        like.classList.toggle("active");
    });
}

export function hideDiv() {
    document.querySelector('.alert').style.display = 'none';
  };


