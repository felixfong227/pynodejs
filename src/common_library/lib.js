const fs = require('fs');
const _path = require('path');

module.exports = {
    encrypt: require('./encrypt/encrypt'),
    
    os: require('./os/os'),
    
    sys: require('./sys/sys'),
    
    path: path => require('./path/path')(path),
    
}