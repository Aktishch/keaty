import fancybox from './ts/fancybox'
import sliderSwiper from './ts/slider-swiper'
import smoothScroll from './ts/smooth-scroll'
import scrollHeader from './ts/scroll-header'
import currentTab from './ts/current-tab'
import animation from './ts/animation'
import waved from './ts/waved'
import listing from './ts/listing'
import preloader from './ts/preloader'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'swiper/css/bundle'
import './scss/main.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  fancybox()
  sliderSwiper()
  currentTab()
  smoothScroll()
  scrollHeader()
  animation()
  waved()
  listing()
  preloader()
}) as EventListener)
