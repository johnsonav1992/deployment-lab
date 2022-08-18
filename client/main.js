const Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'f6fa480d554e4760ac11ba0f768be238',
    captureUncaught: true,
    captureUnhandledRejections: true
  });

const homeLink = document.querySelector('.home-link')

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    rollbar.warn('WARNING!!!!!!')
})