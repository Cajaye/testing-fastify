const mongoose = require('mongoose');

const mongoDBconnect = (url) => {
    return mongoose.connect(url)
}

module.exports = mongoDBconnect