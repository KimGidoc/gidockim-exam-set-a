const read = require('./read')
const employee = require('./employee')
const add = require('./add')
const present = require('./present')

const cmd = process.argv

var note = {}
    note = {
        employee: cmd [2],
        role: cmd[3],
        department: cmd[4]
    }

    var oldNote = read()
    add(note, oldnote)

if (cmd [2] == 'read'){
    present(read())
}
if (data [2] == 'employee'){
    employee(read())
}

