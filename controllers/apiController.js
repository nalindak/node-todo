var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/api/todos/:uname', function (req, res) {

        Todos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;
            else res.send(todos);
        });
    });

    app.get('/api/todos/:id', function (req, res) {

        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;
            else res.send(todo);
        });
    });

    app.post('/api/todo', function (req, res) {

        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo, idDone:
            });
        } else {

        }
    });
};
