const path = require('path');
const fs = require('fs');
module.exports = {
    getcwd: () => process.cwd(),
        
    read: filePath => {
        return fs.readFileSync(path.join(`${process.cwd()}/${filePath}`), 'utf-8');
    },
    
    write: (filePath, content) => {
        const path = require('path');
        const fs = require('fs');
         fs.writeFileSync(path.join(`${process.cwd()}/${filePath}`), content);
         return true;
    },
    
    listdir: path => {
        return fs.readFileSync(path);
    },
}