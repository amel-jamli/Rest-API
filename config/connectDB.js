const mongoose = require('mongoose')
const config = require('config')

const connectDB =()=>{
    mongoose.connect(config.get('MONGOURL') ,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log ('mongoose connected'))
    .catch(()=>console.log('error'))
}


module.exports = connectDB
