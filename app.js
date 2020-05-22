const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT=4000

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect('mongodb://192.168.99.100:27017/instagram',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('connected success')
})
mongoose.connection.on('error',(err)=>{
    console.log('connected fail',err)
})
app.listen(PORT,()=>{
    console.log('server listening on', PORT)
})