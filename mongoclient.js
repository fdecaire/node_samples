var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

//{ useNewUrlParser: true }
MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client){

    var db = client.db('EmployeeDB');
    var cursor = db.collection('Employee').find();
    cursor.each(function(err,doc){
        console.log(doc);
    });
    client.close();
});