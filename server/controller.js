const path = require('path')
const Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'ea570cc7d063423994fb96d4b27f1067',
    captureUncaught: true,
    captureUnhandledRejections: true
  });



module.exports = {
    getHomepage: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
           
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    },

    getRollbar: (req, res) => {
        try {
            doesNotExist()
        } catch (err) {
            rollbar.critical(err)
        }
    }

}