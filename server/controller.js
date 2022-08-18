const path = require('path')
const Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'f6fa480d554e4760ac11ba0f768be238',
    captureUncaught: true,
    captureUnhandledRejections: true
  });

try {
    doesNotExist()
} catch (err) {
    rollbar.critical(err)
}

module.exports = {
    // getHomepage: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../client/index.html'))
           
    // },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    },

    getRollbar: (req, res) => {
    
    }

}