const _path = require('path');
const fs = require('fs');
module.exports = path => {
    const dir = _path.join(`${process.cwd()}/${path}`);
    return {
        listdir: fs.readdirSync(dir),
        is_dir: fs.statSync(dir).isDirectory()
    }
}