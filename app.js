const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//routes
app.use('/', require('./routes/index'));

app.use('/user', require('./routes/user'));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));