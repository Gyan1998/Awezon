const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {MONGOURI}=require('./config/keys');
const PORT=process.env.PORT || 5000;
const path = require('path');

mongoose.connect(MONGOURI,{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.on('connected',()=>{
	console.log("successfully connected");
})
mongoose.connection.on('error',(err)=>{
	console.log("error connecting",err);
})

require('./models/user');
require('./models/post');
require('./models/product');

app.use(express.json()); 
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/product'));

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}


app.listen(PORT,()=>{
	console.log("Listening to port "+PORT);
}) 