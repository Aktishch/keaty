import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Grid,
  Thumbs,
} from 'swiper/modules'
import { media } from './utils'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

export const createPortfolioSlider = (): void => {
  const slider = document.querySelector(
    '*[data-slider="portfolio"]'
  ) as HTMLDivElement

  if (!slider) return

  const value: string = slider.dataset.slider
  const swiper = slider.querySelector(
    `*[data-slider-swiper="${value}"]`
  ) as HTMLDivElement
  const prev = slider.querySelector(
    `*[data-slider-prev="${value}"]`
  ) as HTMLButtonElement
  const next = slider.querySelector(
    `*[data-slider-next="${value}"]`
  ) as HTMLButtonElement

  new window.Swiper(swiper, {
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 0,
    grabCursor: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    breakpoints: {
      [media.sm]: {
        slidesPerView: 2.5,
        spaceBetween: 16,
        allowTouchMove: true,
      },
      [media.md]: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      [media.lg]: {
        slidesPerView: 4.5,
        spaceBetween: 24,
        allowTouchMove: true,
      },
      [media.xl]: {
        slidesPerView: 5.5,
        spaceBetween: 28,
        allowTouchMove: true,
      },
    },
  }) as Swiper
}

export default (): void => {
  createPortfolioSlider()
}
