$('.nav__button').on('click', function () {
  if($('.nav__button').hasClass("collapsed")) {
    $('.nav__button img').attr('src',"./images/icon-close.svg");
  } else {
    $('.nav__button img').attr('src',"./images/icon-hamburger.svg");
  }
  })