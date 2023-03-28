const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authorName: {
        type: String,
        required: true,
    },
    publicationHouse: {
        type: String,
        required: true
    },
    publicationDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publicationYear: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);