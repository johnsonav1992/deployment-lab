const path = require('path')
const Rollbar = require('rollbar')

module.exports = {
    getHomepage: (req, res) => {
        try {
            doesNotExist()
        } catch (err) {
            Rollbar.critical(err)
        }
        res.sendFile(path.join(__dirname, '../client/index.html'))
           
    },

    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    },

    getRollbar: (req, res) => {
    
    }

}