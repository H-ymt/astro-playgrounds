document.addEventListener('DOMContentLoaded', () => {
  const modalTriggers = document.querySelectorAll('.js-modalTrigger')
  const modals = document.querySelectorAll('.js-modal')
  const closeButtons = document.querySelectorAll('.js-modalClose')

  function closeModal(modal) {
    modal.close()
    modal.querySelector('.js-modalClose')?.classList.remove('is-active')
  }

  function openModal(modal) {
    modal.showModal()
    modal.querySelector('.js-modalClose')?.classList.add('is-active')
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
      const modal = this.closest('.js-modalWrapper').querySelector('.js-modal')
      if (modal) {
        openModal(modal)
      }
    })
  })

  closeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const modal = this.closest('.js-modal')
      if (modal) {
        closeModal(modal)
      }
    })
  })

  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal)
      }
    })
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modals.forEach((modal) => {
        if (modal.open) {
          closeModal(modal)
        }
      })
    }
  })
})
