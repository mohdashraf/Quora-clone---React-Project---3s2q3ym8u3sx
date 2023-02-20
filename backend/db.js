


  const mongoose = require('mongoose');

const url ="mongodb://db0:3JYOSdlQYob966Ml@ac-zflsmo7-shard-00-00.b5nadjw.mongodb.net:27017,ac-zflsmo7-shard-00-01.b5nadjw.mongodb.net:27017,ac-zflsmo7-shard-00-02.b5nadjw.mongodb.net:27017/quora-clone?ssl=true&replicaSet=atlas-v8ql0u-shard-0&authSource=admin&retryWrites=true&w=majority"

//3JYOSdlQYob966Ml
module.exports.connect = () => {
  
  mongoose.set('strictQuery',false);  
  mongoose
  .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };




  