const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MogoDB server.');
  }
  console.log('Connected to the MogoDB server');

  //Update key value pair: findOneAndUpdate(filter, update, options, callback)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59ca7141dc34534353192e64"),
  // }, {
  // //you need update operators
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  //challenge
  db.collection('Users').findOneAndUpdate({
    name: "Jen"
  }, {
    $set: {
      name: "Rohail"
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndUpdate({
    age: 19
  }, {
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })




  //db.close();
});
