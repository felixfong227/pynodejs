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

const dir = "./src";

// List files
pynodejs.print(pynodejs.lib.path(dir))

// Check if the path is a directory or not
pynodejs.print(pynodejs.lib.path(dir).is_dir);

// Using third party PyNodeJS modules
// pynodejs.pip.add('');
// pynodejs.pip.add('');

pynodejs.pip.add([
    './pony_lib/pony',
    './src/extra_lib/helper',
]);

pynodejs.print(pynodejs.lib.pony_lib.greeting('Felix'))

pynodejs.print(pynodejs.lib.pynodejs_helper.random.string())

pynodejs.print(pynodejs.lib.pynodejs_helper.random.number())