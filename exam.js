const read = require('./read')
const employee = require('./employee')
const add = require('./add')
const present = require('./present')

const data = process.argv

var note = {}
if (data[2] == 'add')
    note = {
        employee: data [3],
        role: data[4],
        department: data[5]
    }

    var oldNote = read()
    add(note, oldnote)

if (data [2] == 'read'){
    present(read())
}
if (data [2] == 'employee'){
    employee(read())
}