document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-details').forEach((el) => {
    const summary = el.querySelector('.js-summary')
    const content = el.querySelector('.js-content')

    summary.addEventListener('click', (event) =>
      toggleContent(el, content, event),
    )
  })
})

const animTiming = {
  duration: 250,
  easing: 'ease-out',
}

const toggleContent = (el, content, event) => {
  event.preventDefault()

  if (el.hasAttribute('open')) {
    closeContent(el, content)
  } else {
    openContent(el, content)
  }
}

const openContent = (el, content) => {
  el.setAttribute('open', 'true')
  const openingAnim = content.animate(openingAnimation(content), animTiming)
}

const closeContent = (el, content) => {
  const closingAnim = content.animate(closingAnimation(content), animTiming)
  closingAnim.onfinish = () => el.removeAttribute('open')
}

const openingAnimation = (content) => [
  { height: '0px', opacity: 0 },
  { height: `${content.scrollHeight}px`, opacity: 1 },
]

const closingAnimation = (content) => [
  { height: `${content.offsetHeight}px`, opacity: 1 },
  { height: `${content.offsetHeight}px`, opacity: 0, offset: 0.1 },
  { height: '0px', opacity: 0 },
]
