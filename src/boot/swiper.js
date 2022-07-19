import { boot } from 'quasar/wrappers'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, router}) => {
  app.component('swiper-list',Swiper);
  app.component('swiper-slide',SwiperSlide);
})
