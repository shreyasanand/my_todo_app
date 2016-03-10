// app/models/todo.js

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    // expose the todo model to our app with module.exports
    module.exports = mongoose.model('Todo', {
        text : String,   // The textual content of the todo item e.g.: "Pay bills"
        active: Boolean  // Active status of the todo item. true => active, false => completed
    });