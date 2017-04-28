// Just a demo file
const pynodejs = require('./src/index');

// Basic output
pynodejs.print('Howdy Pony')

// List
pynodejs.print(pynodejs.list('Howdy y\'all'))

// Read file
pynodejs.print(pynodejs.read('simple.txt'))

// Write file
pynodejs.print(pynodejs.write('pynodejsWrite.txt', 'Did i just write a file with PyNodeJS? lol'))

// Type checking
pynodejs.print(pynodejs.isinstance('Howdy Pony', 'string'));

// Length of the object
pynodejs.print(pynodejs.len('How many length I got?'))

// Round the number
pynodejs.print(pynodejs.round(3.14))

// encrypt stuff
// md5
pynodejs.print(pynodejs.encrypt.md5('Howdy Pony'));

// sha224
pynodejs.print(pynodejs.encrypt.sha224('Howdy Pony'));