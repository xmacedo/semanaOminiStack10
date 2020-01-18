const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routs = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

//conexao Mongo BD
mongoose.connect('mongodb+srv://mongodb-stitch-test-urxlj:7kYIpVlgqGLvzzkK@cluster0-yt67s.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors())
app.use(express.json());
app.use(routs);

server.listen(1313);