const Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '3aaa61765f034ab38a174ebc1cbb3f7f',
    captureUncaught: true,
    captureUnhandledRejections: true
  });

rollbar.warning('WARNING!!!!!!')

const homeLink = document.querySelector('.home-link')

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
})