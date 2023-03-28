const Book = require('../models/Book');

exports.getAll = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  exports.create = async (req, res) => {
    const { title, authorName, publicationHouse ,publicationDate , genre, publicationYear } = req.body;
    try {
      const book = new Book({ title, authorName, publicationHouse ,publicationDate , genre, publicationYear});
        await book.save();
        res.status(200).json({book});
    } catch (err)
     { res.status(500).json({ message: err.message }); }
  };






