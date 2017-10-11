module.exports = {
    _config: {
        name: 'pynodejs_helper',
        version: '1.0.0',
    },
    
    random: {
        string: (length=10, range) => {
            var text = "";
            var possible = range || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            
            for (var i = 0; i < length; i++){
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        },
        number: (length=10) => {
            var number = "";
            for(let i = 0; i <= length; i++){
                number += Math.floor(Math.random() * 10);
            }
            return number;
        }
    }
    
}