const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');



const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));