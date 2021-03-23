const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "You need to have a joke setup"],
        minlength: [3, "Your joke setup has to be at least 3 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Your joke needs a punchline"],
        minlength: [2, "Your punchline needs to have at least 2 characters"]
    }},
    { timestamps: true }
);

module.exports = mongoose.model('Joke', JokeSchema);