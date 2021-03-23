const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


require('./config/mongoose.config');

// set up routes
require('./routes/jokes.routes')(app);

app.listen(8000, () => console.log("The server is fired up on port 8000"));