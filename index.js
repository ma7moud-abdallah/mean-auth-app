const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require('passport')

const users = require('./routes/users')
const config = require('./config/config')

const port = process.env.PORT || 8080



mongoose.connect(config.database,{ useMongoClient: true })
mongoose.Promise = global.Promise;

mongoose.connection.on('connected' , ()=>{
   console.log('connected'+ config.database)
})
mongoose.connection.on('error' , (err)=>{
   console.log('error'+err)
})


let app = express()

app.use(cors())

app.listen(port)

app.use(express.static(path.join(__dirname,'public')))

// parse application/x-www-form-urlencoded 
/**/
 
// parse application/json 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users',users)

app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)



app.get('/',function(req,res){
       res.send('hello')
})

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'public/index.html'))
})