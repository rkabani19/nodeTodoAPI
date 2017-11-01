const {ObjectID} = require('mongoDB');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

Todo.remove({}).then((result) => {
  console.log(result)
})

//both return docs unlike Todo.remove
// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('fnlsafndsjk').then((docs) => {
  console.log(docs);
})

Todo.findOneAndRemove({_id: 'fnlsafndsjk'}).then((docs) => {
  console.log(docs);
})
