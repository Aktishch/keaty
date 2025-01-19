import { scrolledPage } from './utils'

export default (): void => {
  const wrappers = document.querySelectorAll('*[data-smooth-wrapper]') as NodeListOf<HTMLElement>

  wrappers.forEach((wrapper: HTMLElement): void => {
    if (!wrapper) return

    const layers = wrapper.querySelectorAll(
      '*[data-smooth-layer]'
    ) as NodeListOf<HTMLElement>
  
    layers.forEach((layer: HTMLElement): void => {
      if (!layer) return
  
      const layerSpeed: number = Number(layer.dataset.smoothSpeed) / 100 || 0.02
      const layerDepth: number = Number(layer.dataset.smoothDepth) || 1
      let layerPosition: number = 0
  
      const createSmoothLayer = (): void => {
        layerPosition +=
          (scrolledPage().top - wrapper.offsetTop - layerPosition) * layerSpeed

        switch (layer.dataset.smoothLayer) {
          case 'top': {
            layer.style.transform = `translateY(${-layerPosition / layerDepth}px)`
            break
          }

          case 'bottom': {
            layer.style.transform = `translateY(${layerPosition / layerDepth}px)`
            break
          }

          case 'left': {
            layer.style.transform = `translateX(${-layerPosition / layerDepth}px)`
            break
          }

          case 'right': {
            layer.style.transform = `translateX(${layerPosition / layerDepth}px)`
            break
          }

          default:
            return
        }
  
        window.requestAnimationFrame(createSmoothLayer)
      }
  
      window.requestAnimationFrame(createSmoothLayer)
    })
  })
}
