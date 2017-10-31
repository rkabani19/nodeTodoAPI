const {ObjectID} = require('mongoDB');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

var id = '59f892661e1a4a2c3deb4508';
var badId = '69f892661e1a4a2c3deb4508';
var invalidId = '59f892661e1a4a2c3deb45081111111111';

// Todo.find({
//   _id: id //unlike mongoDB mongoose automatically recognizes it's an ObjectID
// }).then((todos) => {
//   console.log(todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// })
//
// Todo.findById(invalidId).then((todo) => {
//   if(!todo) { //this is for incorrect id
//     return console.log('id not found!')
//   }
//   console.log(todo);
// }).catch((e) => console.log(e)); //this is for invalid id
//
// if(!ObjectID.isValid(id)) { //ObjectID has capability to check if it is valid
//   console.log('Id not valid');
// }

var userId = '59cea10245413c6d61e68fd0';
var badUserId = '69cea10245413c6d61e68fd0';
var invalidUserId = '59cea10245413c6d61e68fd0111111';

User.findById(invalidUserId).then((user) => {
  if (!user) {
    return console.log('bad user id!')
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
})// or you can do this: .catch((e) => console.log(e))
