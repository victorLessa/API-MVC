const app = require('./app')
 
app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
    console.log(`Port ${process.env.PORT || 3000}`)
});

module.exports = app