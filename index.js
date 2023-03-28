const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db= require('./database/db');
const seedDatabase= require('./seeders/bookSeeder');

const userRoutes = require('./routes/userRoutes')
const bookRoutes= require('./routes/bookRoutes')
const userBookRoutes= require('./routes/userBookRoutes')


const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRoutes)
app.use('/books', bookRoutes)
app.use('/book', userBookRoutes)


app.listen(port, () => {
  // seedDatabase()  
  console.log(`Server listening at http://localhost:${port}`);
});