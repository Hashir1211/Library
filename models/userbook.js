const mongoose = require("mongoose")

const userBookSchema = new mongoose.Schema({
    users: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", 
        }
      ],
      books: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        }
      ],
    status: {
        type: String,
        enum: ['Plan to Read', 'Reading', 'Completed', ],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UserBook', userBookSchema);