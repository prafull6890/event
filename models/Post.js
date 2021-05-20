const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://Prafull:Prafull123@cluster0-shard-00-00-lmvef.mongodb.net:27017,cluster0-shard-00-01-lmvef.mongodb.net:27017,cluster0-shard-00-02-lmvef.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",{
  useUnifiedTopology:true, 
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
 });
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
