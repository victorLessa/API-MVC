const express = require("express");
const route = require("./routes/index");
const cors = require('cors')
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(route);
app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
    console.log(`Port ${process.env.PORT || 3000}`)
});

module.exports = app