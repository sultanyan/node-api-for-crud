//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
   return  console.log('connection is failed')
  }
  console.log('connected to Mongodbdb');
/*
db.collection('Todos').insertOne({
test:"Something to do",
completed:false
},(err,result)=>{

if(err){
  return console.log('unable to insert todo',err);

}
console.log(JSON.stringify(result.ops,undefined,2));
});


//usets collection name,age ,location
db.collection('Users').insertOne({

  name:"Sashik",
  age:23,
  location:"Akademia"
},(err,result)=>{
  if(err){
  return console.log('there was an error adding collections',err)

} console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
}); */
  db.close();
});
