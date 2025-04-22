// JavaScript to detect when an element enters the viewport
const elements = document.querySelectorAll('.animate-scrollFadeIn')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100') // Add visibility class
      } else {
        entry.target.classList.remove('opacity-100') // Remove visibility when out of view
      }
    })
  },
  { threshold: 0.1 }
)

elements.forEach((element) => observer.observe(element))
