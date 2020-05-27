const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3003;
const mongoUri = "mongodb+srv://sasikanth:dbcpass123@dbccluster0-nn6hg.mongodb.net/test?retryWrites=true&w=majority";

//body-parser middleware

app.use(bodyParser.urlencoded({extended : true}));



//setup
mongoose.connect(
    mongoUri,
    {useNewUrlParser: true,useUnifiedTopology: true},
    (err)=>{
        if(err) console.log("Could'nt connect to db\n",err);
        else{console.log('Connected to db');}
    }
);

// app.set('view engine','ejs');
// app.use(express.static(__dirname + "/public"));

var myarr = []
var i=0
while(i<10){
myarr[i] = {
    a : "title "+i,
    b : "desc "+i
}
i++
}
console.log(myarr);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
  });

app.get('/',(req,res) => {
    res.json(myarr);
})


app.listen(port,() => {console.log(`running on ${port}`)});