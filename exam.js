const read = require('./read')
const emp = require('./emp')
const add = require('./add')
const present = require('./present')

const cmd = process.argv

var note = {}

if (cmd[2] == 'add')
    note = {
        employee: cmd [3],
        role: cmd[2],
        department: cmd[5]
    }

    var oldNote = read()
    add(note, oldnote)

if (cmd [2] == 'read'){
    present(read())
}
if (data [2] == 'employee'){
    employee(read())
}

