const fs = require('fs')
const write = function(data = 'defalt') {
    fs.writeFileSync('data.txt', data)
}
module.exports = write