const html = document.querySelector("html");

function burgerMenu() {
  const menu = document.querySelector(".menu");

  menu.addEventListener("click", () => {
    const menuBurger = document.querySelector(".burger-menu");
    const menuBurgerList = document.querySelector(".burger-menu_list");

    menuBurgerList.addEventListener("click", (e) => {
      if (e.target !== menuBurgerList) {
        menu.classList.remove("opened");
        menuBurger.classList.remove("burger-menu_open");
        html.style.overflow = "visible";
      }
    });
    menu.classList.toggle("opened");
    menu.classList.contains("opened")
      ? (menuBurger.classList.add("burger-menu_open"),
        (html.style.overflow = "hidden"))
      : (menuBurger.classList.remove("burger-menu_open"),
        (html.style.overflow = "visible"));
  });
}

function animateAvatar() {
  const avatar = document.querySelector(".home-right_avatar");
  let circleItems = document.querySelectorAll(".home-right_circle-item");
  const length = circleItems.length;
  const arc = -3 * Math.PI * (1 / length);
  const radius = innerWidth > 795 ? 70 : innerWidth > 420 ? 80 : 60;

  avatar.addEventListener("mouseover", (e) => {
    for (let i = 0; i < length; i++) {
      setTimeout(function timer() {
        const angle = (i * arc) / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        circleItems[i].classList.add("home-right_circle-active");
        circleItems[i].style.left = 50 + x + "%";
        circleItems[i].style.top = 50 + y + "%";
      }, i * 150);
    }
  });
  avatar.addEventListener("mouseout", () => {
    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        circleItems[i].classList.remove("home-right_circle-active");
        circleItems[i].removeAttribute("style");
      }, i * 150);
    }
  });
}

function simpleSlider() {
  const slides = document.querySelectorAll(".slide");
  const sliderLine = document.querySelector(".slider-line");
  let count = 0;
  let width;

  function init() {
    width = document.querySelector(".portfolio-slider").offsetWidth;
    sliderLine.style.width = width * slides.length + "px";
    slides.forEach((item) => {
      item.style.width = width + "px";
      item.style.height = "auto";
    });
    rollSlider();
  }

  window.addEventListener("resize", init);

  init();

  document.querySelector(".slider-next").addEventListener("click", () => {
    count++;
    if (count >= slides.length) {
      count = 0;
    }
    rollSlider();
  });

  document.querySelector(".slider-prev").addEventListener("click", () => {
    count--;
    if (count < 0) {
      count = slides.length - 1;
    }

    rollSlider();
  });

  function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)";
    setTimeout(() => {}, 1000);
  }
}

window.addEventListener("scroll", function () {
  const btnScroll = document.querySelector(".btn-scroll_top");
  const skillsItems = this.document.querySelectorAll(".skills-list_item");
  const scrollToTop = window.pageYOffset;

  if (scrollToTop >= 300) {
    skillsItems.forEach((item) => {
      item.classList.add("active");
      item.style.transform = "translate(0,0)";
    });
  }
  scrollToTop > 100
    ? btnScroll.classList.add("active")
    : btnScroll.classList.remove("active");
});

function modal() {
  const wrapperModal = document.querySelector(".modal-wrapper");
  const btn = document.querySelector(".btn-contactMe");
  const blockModal = document.querySelector(".modal");
  const closeModal = document.querySelector(".modal-close");

  wrapperModal.addEventListener("click", (e) => {
    if (e.currentTarget == e.target) {
      close();
    }
  });

  btn.addEventListener("click", () => {
    wrapperModal.classList.add("modal-open");
    blockModal.style.transform = "translateX(0)";
    html.style.overflow = "hidden";
  });
  const close = () => {
    wrapperModal.classList.remove("modal-open");
    blockModal.style.transform = "translateX(-100%)";
    html.style.overflow = "visible";
  };
  closeModal.addEventListener("click", close);
}

burgerMenu();
animateAvatar();
simpleSlider();
modal();
