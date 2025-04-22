window.addEventListener('DOMContentLoaded', () => {
  const body = document.body

  body.classList.add('animate-fadeIn')

  window.addEventListener('beforeunload', () => {
    body.classList.add('animate-fadeOut')
  })
})
