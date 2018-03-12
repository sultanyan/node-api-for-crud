//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
 return  console.log('connection is failed')
}console.log('connected to Mongodbdb');

/*db.collection("Todos").find({
  _id:new ObjectID('5aa66f537809d00bc8797ecf')
}).toArray().then((docs)=>{
console.log("Todos");
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
if(err){
  console.log("unable to fethc todos",err);

}
}); */

/*db.collection("Todos").find().count().then((count)=>{
console.log(`Todos count ${count}`);
},(err)=>{
if(err){
  console.log("unable to fethc todos",err);

}
});
*/
db.collection('Users').find({name:"Jane"}).count()
.then((count)=>{
  console.log(` the count of users is ${count}`);
},(err)=>{
  if(err){
    console.log("unable to fatch users number")
  }

})
  //db.close();
});
