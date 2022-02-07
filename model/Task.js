const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: [true, 'must provide name'],
        trim: true,
        maxlength: [40, 'cannot be more than 40']
    },
    completed: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Task', TaskSchema)