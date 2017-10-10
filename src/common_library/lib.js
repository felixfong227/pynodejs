const fs = require('fs');
const _path = require('path');

module.exports = {
    encrypt: {
        md5: string => {
            return require('crypto').createHash('md5').update(string).digest("hex");
        },
        sha224: string => {
            return require('crypto').createHash('sha224').update(string).digest("hex");
        }
    },
    
    os: {
        getcwd: () => process.cwd(),
        
        read: filePath => {
            const path = require('path');
            const fs = require('fs');
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
        }
        
    },
    
    sys: {
        argv: process.argv.slice(2),
    },
    
    path: path => {
        const dir = _path.join(`${process.cwd()}/${path}`);
        return {
            listdir: fs.readdirSync(dir),
            is_dir: fs.statSync(dir).isDirectory()
        }
    }
    
    
}