module.exports = {
    md5: string => {
        return require('crypto').createHash('md5').update(string).digest("hex");
    },
    sha224: string => {
        return require('crypto').createHash('sha224').update(string).digest("hex");
    }
}