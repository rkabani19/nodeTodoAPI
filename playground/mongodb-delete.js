const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MogoDB server.');
  }
  console.log('Connected to the MogoDB server');

  //delete many
  // db.collection('Todos').deleteMany({title: 'Do homework'}).then((result) => {
  //   console.log(result);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Do homework'}).then((result) => {
  //   console.log(result);
  // })

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  //challenge
  db.collection('Users').deleteMany({name: "Rohail Kabani"}).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59c13c5f426458a8aeff1e23')}).then((result) => {
    console.log(result);
  })
  
  //db.close();
});
