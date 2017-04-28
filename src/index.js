module.exports = {
    print: string => {
        console.log(string);
    },
    list: string => {
        return string.split('');
    },
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
    isinstance: (char, type) => {
        // There a different name for JavaScirpt and Python ¯\_(ツ)_/¯
        switch(type){
            case 'int':
                type = 'number';
            break;
            case 'none':
                type = 'null';
            break;
            case 'list':
                type = 'object';
            break;
        }

        if(typeof char  == type){
            return true;
        }else{
            return false;
        }
    },
    len: string => {
        return string.length;
    },
    round: number => {
        return Math.round(number);
    },
    encrypt: {
        md5: string => {
            return require('crypto').createHash('md5').update(string).digest("hex");
        },
        sha224: string => {
            return require('crypto').createHash('sha224').update(string).digest("hex");
        }
    }
}