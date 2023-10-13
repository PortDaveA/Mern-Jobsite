const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Default", "Software Engineer", "Web Developer", "Data Scientist"],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    coverletter: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User', ReactFormDataSchema);

module.exports = User;
