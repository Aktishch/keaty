import { scrolledPage } from './utils'

export default (): void => {
  const header = document.querySelector('*[data-header]') as HTMLElement

  if (!header) return

  let prevOffsetTop: number = scrolledPage().top

  const scrollHeader = (): void => {
    const currentOffsetTop: number = scrolledPage().top

    if (header.offsetHeight / 2 < currentOffsetTop) {
      header.classList.remove('bg-opacity-0')
      header.classList.add('shadow')
    } else {
      header.classList.add('bg-opacity-0')
      header.classList.remove('shadow')
    }

    prevOffsetTop = currentOffsetTop
  }

  scrollHeader()
  document.addEventListener('scroll', scrollHeader as EventListener)
}
