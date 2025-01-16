import { scrolledPage } from './utils'

export default (): void => {
  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  let prevOffsetTop: number = scrolledPage().top

  const scrollHeader = (): void => {
    const currentOffsetTop: number = scrolledPage().top

    if (header.offsetHeight / 4 < currentOffsetTop) {
      header.classList.remove('bg-opacity-0')
      header.classList.add('-translate-y-20', 'shadow')
    } else {
      header.classList.add('bg-opacity-0')
      header.classList.remove('-translate-y-20', 'shadow')
    }

    prevOffsetTop = currentOffsetTop
  }

  scrollHeader()
  document.addEventListener('scroll', scrollHeader as EventListener)
}
