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
    lib: require('./common_library/lib'),
}