// Just a demo file
const pynodejs = require('./src/index');

// Basic output
pynodejs.print('Howdy Pony')

// List
pynodejs.print(pynodejs.list('Howdy y\'all'))

// Read file
pynodejs.print(pynodejs.lib.os.read('simple.txt'))

// Write file
pynodejs.print(pynodejs.lib.os.write('pynodejsWrite.txt', 'Did i just write a file with PyNodeJS? lol'))

// Type checking
pynodejs.print(pynodejs.isinstance('Howdy Pony', 'string'));

// Length of the string
pynodejs.print(pynodejs.len('How many length I got?'))

// Round the number
pynodejs.print(pynodejs.round(3.14))

// encrypt stuff
// md5
pynodejs.print(pynodejs.lib.encrypt.md5('Howdy Pony'));

// sha224
pynodejs.print(pynodejs.lib.encrypt.sha224('Howdy Pony'));

// Get current working directory
pynodejs.print(pynodejs.lib.os.getcwd())

// Get the CLI argument
pynodejs.print(pynodejs.lib.sys.argv);

// List files
pynodejs.print(pynodejs.lib.path("."))

// Check if the path is a directory or not
pynodejs.print(pynodejs.lib.path(".").is_dir)