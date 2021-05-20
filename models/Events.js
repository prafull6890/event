const mongoose = require('mongoose');
mongoose.connect("mongodb://Prafull:Prafull123@cluster0-shard-00-00-lmvef.mongodb.net:27017,cluster0-shard-00-01-lmvef.mongodb.net:27017,cluster0-shard-00-02-lmvef.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{
  useUnifiedTopology:true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
 });
const User = require('./User')

const EventsSchema = new mongoose.Schema({
  name:{
    type: String,
    
  },
  organizer: {
    type: mongoose.SchemaTypes.ObjectId, ref: 'user'
  },
  type: {
    type: String,

  },
  information: {
    type: String,
  },
  longitude:{
    type:Number,
    default: -86.5221
  },
  latitude:{
    type:Number,
    default: 39.1727
  },
  attendees:[{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
  pay:{
    type:String,
  },
  address:{
    type:String,
  },
  Details:{
    type:String,
  },
  Capacity:{
    type:Number
  },
  Age: {
    type: String
  },
  status: {
    type: String,
    default: 'Confirmed'
  }

},{ collection: 'events' }
);


module.exports = Events = mongoose.model('events', EventsSchema);