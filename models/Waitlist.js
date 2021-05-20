const mongoose = require('mongoose');
mongoose.connect("mongodb://Prafull:Prafull123@cluster0-shard-00-00-lmvef.mongodb.net:27017,cluster0-shard-00-01-lmvef.mongodb.net:27017,cluster0-shard-00-02-lmvef.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{
  useUnifiedTopology:true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
 });
const WaitSchema = new mongoose.Schema({
  
      activityname: { type :String,
      },
      listuser:[{
          type: String,
      }
      ]

},{ collection: 'waitlist' });

module.exports = Waitlist = mongoose.model('waitlist', WaitSchema);
