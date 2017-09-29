const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MogoDB server.');
  }
  console.log('Connected to the MogoDB server');

  //Find with object ID
  // db.collection('Todos').find({
  //     _id: new ObjectID('59c13939d8aa45a848b15e9b'
  //   )}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err)
  // })

  // Find and output count
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count: ' + count);
  // }, (err) => {
  //   console.log("Unable to fetch todos", err)
  // })

  db.collection('Users').find({name: 'Rohail Kabani'}).count().then((count) => {
    console.log('Todos count for name Rohail Kabani is ' + count);
  }, (err) => {
    console.log("Unable to fetch todos for Rohail", err)
  })


  // db.close();
});
