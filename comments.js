//Create web server and listen on port 8080
const express = require('express');
const app = express();
const port = 8080;
//Import comments.json
const comments = require('./comments.json');
//Create a route for /comments
app.get('/comments', (req, res) => {
//Send JSON response
res.json(comments);
});
//Start web server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

// run the server
// node comments.js
// open http://localhost:8080/comments in your browser
// you should see the comments in your browser

// now let's create a route to get a single comment
// Path: comments.js
//Create web server and listen on port 8080
const express = require('express');
const app = express();
const port = 8080;
//Import comments.json
const comments = require('./comments.json');
//Create a route for /comments
app.get('/comments', (req, res) => {
//Send JSON response
res.json(comments);
});
//Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
//Find comment by id
const comment = comments.find(comment => comment.id === req.params.id);
//Send JSON response
res.json(comment);
});
//Start web server
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

// run the server
// node comments.js
// open http://localhost:8080/comments/1 in your browser
// you should see the first comment in your browser

// now let's create a route to get a single comment
// Path: comments.js
//Create web server and listen on port 8080
const express = require('express');
const app = express();
const port = 8080;
//Import comments.json
const comments = require('./comments.json');
//Create a route for /comments
app.get('/comments', (req, res) => {
//Send JSON response
res.json(comments);
});
//Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
//Find comment by id
const comment = comments.find(comment => comment.id === req.params.id);
//Send JSON response
res.json(comment);
});
//Start web server
app.listen(port, () => {
console.log(`Server running