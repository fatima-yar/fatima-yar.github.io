import AOS from 'aos'
import 'aos/dist/aos.css'

window.addEventListener('load', () => {
  AOS.init({
    duration: 1200,
    easing: 'ease',
    once: true,
  })
})
