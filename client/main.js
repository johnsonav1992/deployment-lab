const homeLink = document.querySelector('.home-link')

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    Rollbar.warning('WARNING!!!!!!')
})