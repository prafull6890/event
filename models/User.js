const mongoose = require('mongoose');
mongoose.connect("mongodb://Prafull:Prafull123@cluster0-shard-00-00-lmvef.mongodb.net:27017,cluster0-shard-00-01-lmvef.mongodb.net:27017,cluster0-shard-00-02-lmvef.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{
  useUnifiedTopology:true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
 });
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  type_of_user: {
    type: String,
    // enum: ['Organizer', 'Attendee']
  },
  resetPasswordToken:{type:String},
  question1:{
    type:String
  },
  answer1:{
    type:String
  },
  question2:{
    type:String
  },
  answer2:{
    type:String
  },
  activityname: [{
    type:String
  }
  ],  
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'events'}],
  venuename: [{
    type:String
  }
  ],
  Waitinglistevent: [{
    type:String
  }
  ],
  timeslot:{
    type:String
  }
});

module.exports = User = mongoose.model('user', UserSchema);
