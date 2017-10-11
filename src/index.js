const fs = require('fs');
const path = require('path');
module.exports = {
    print: string => {
        console.log(string);
    },
    list: string => {
        return string.split('');
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
    
    // Third party developer common library
    
    pip: {
        add: pkgs => {
            const cwd = process.cwd();
            pkgs.forEach(libPath => {
                libPath = path.join(`${cwd}/${libPath}`);
                const libCode = require(libPath);
                const libName = libCode._config.name;
                if(!libName){
                    throw new Error('package name must be specified')
                }
                delete libCode._config;
                require('./common_library/lib')[libName] = libCode;
                console.log(`PyNodeJS: ${libName} has added to your PyNodeJS runtime`);
            })
        }
    },
    
    lib: require('./common_library/lib'),
}