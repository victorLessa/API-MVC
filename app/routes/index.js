const express = require('express');
const fs = require('fs')
const path = require('path')
const routes = express.Router();

fs.readdirSync(path.join(__dirname)).forEach(files => {
    let file = path.join(__dirname, files)
    let route = require(file)
    if (files !== 'index.js') {
        for(statement of route.stack) {
            routes.stack.push(statement)
        }
    }
})

module.exports = routes;