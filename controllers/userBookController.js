const Book = require('../models/Book');
const UserBook = require('../models/userbook');

exports.getAll = async (req, res) => {
  const { id } = req.user;
  try {
    const result = await UserBook.find({ users: id }).populate('books').select('status');

    const collection = result.map((
      { books: [{ id, title, authorName, publicationHouse, genre, publicationYear }], status }) => 
      ({ id, title, authorName, publicationHouse, genre, publicationYear, status }));

    res.json(collection)
 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.addStatus = async (req, res) => {
  const { id } = req.params
  try {
    const exists = await UserBook.findOne({ users: req.user.id, books: id });
    if (exists) {
      return res.status(400).json({ message:'This book already belongs to this user'});
    }
    const users = req.user.id;
    const status = 'Plan to Read';
    const userBook = new UserBook();
    userBook.users= users
    userBook.books= id
    userBook.status = status;
    await userBook.save();
    res.status(200).json({ message: "Added to wishlist" })
  } catch (err) {
    res.status(400).json({ message: "Error Occured. Invalid Book ID" });
  }
};


exports.updateStatus = async (req, res) => {
  const {id} = req.params;
  const {status: enterStatus}= req.body;
  try {
    const exists = await UserBook.findOneAndUpdate({ users: req.user.id , books: id },{ $set: { status: enterStatus }}).populate({
      path: 'books',
    })
    res.json({message: "Book Status has been updated"});
  } catch (err) {
    res.status(400).json({ message: "Error Occured. Invalid Book ID" });
  }
}




