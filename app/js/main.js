$(function () {
  $('.top-image__items').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.top-rate__slider-items, .mistakes__slider-items').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55623 1.08505L8.64039 4.99909M1.08066 4.95282L5.19734 1.07301" stroke="#DADADA"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.13588 5.12058L1.00001 1.26123M8.55968 1.2069L4.495 5.14115" stroke="#C4C4C4"/></svg></button>'
  });
  // console.log($('.top-image__items').length);

  $(".star").rateYo({
    starWidth: "21px",
    numStars: 1,
    normalFill: "#EBB90A",
    readOnly: true,
  });
})