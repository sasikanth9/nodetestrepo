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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',(req,res) => {
    res.json(myarr);
})


app.listen(port,() => {console.log(`running on ${port}`)});