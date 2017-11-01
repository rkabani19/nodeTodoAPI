var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongoDB');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/todos');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
});

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(e);
  });
})

app.get('/todos/:todoId', (req, res) => {
  var todoId = req.params.todoId;

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).send();
  }

  Todo.findById(todoId).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })

})

/*
app.get('/todos/delete/:todoId', (req, res) => {
  var todoId = req.params.todoId;

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(todoId).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({
      message: 'Todo successfully delted.'.
      _id: todoId
  });
  }).catch((e) => {
    res.status(400).send();
  })
})
*/

app.listen(port, () => {
  console.log(`Started server on ${port}`)
});

module.exports = {
  app: app
}
