require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/todos');

var app = express();
const port = process.env.PORT;

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

app.delete('/todos/:todoId', (req, res) => {
  var todoId = req.params.todoId;

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(todoId).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
})

app.patch('/todos/:todoId', (req, res) => {
  var todoId = req.params.todoId;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(todoId)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(todoId, {$set: body}, {new: true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
})

app.listen(port, () => {
  console.log(`Started server on ${port}`)
});

module.exports = {
  app: app
}
