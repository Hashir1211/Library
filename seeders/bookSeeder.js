const Book = require('../models/Book');
const mongoose = require("mongoose");

const { faker } = require('@faker-js/faker');
const _ = require('lodash');


const generateBooks = (numBooks) => {
    return _.times(numBooks, () => {
      return {
        title: faker.lorem.sentence(),
        authorName: faker.name.fullName(),
        publicationHouse: faker.company.name(),
        publicationDate: faker.date.past().toLocaleDateString(),
        genre: faker.name.fullName(),
        publicationYear: faker.date.past().toLocaleDateString(),
      };
    });
  };

  const seedDatabase = async () => {
    const numBooks = 10;
    const books = generateBooks(numBooks);

  
    try {
   const loadingBooks= await Book.insertMany(books)
      
      console.log('Seeding the database with books:', books);
    } catch (error) {
      console.error(error);
    }
  };

module.exports= seedDatabase;

