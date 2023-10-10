import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
      el: '.swiper-pagination',

  },
  breakpoints: {
      320: {
          slidesPerView: 1.2,
          spaceBetween: 16,

      },
      360: {
          slidesPerView: 1.3,
          spaceBetween: 16,
      },
      480: {
          slidesPerView: 1.4,
          spaceBetween: 16,
      },
      


  },
});

