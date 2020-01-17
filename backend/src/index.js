const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routs = require('./routes')

const app = express();

//conexao Mongo BD
mongoose.connect('mongodb+srv://mongodb-stitch-test-urxlj:7kYIpVlgqGLvzzkK@cluster0-yt67s.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors())
app.use(express.json());
app.use(routs);

app.listen(1313);