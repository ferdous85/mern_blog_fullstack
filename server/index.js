const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path= require('path')



const app = express()

app.use(express.json())
app.use("/image", express.static(path.join(__dirname, "/image")))

mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true,
     useFindAndModify:true
    }).then(console.log('Connected to MongoDB')).catch((err)=>console.log(err));

const storage = multer.diskStorage({
        destination:  (req, file, cb) => {
          cb(null, 'image')
        },
        filename:  (req, file, cb) => {
          cb(null, "myimage.jpg")
        }
      })
       
const upload = multer({ storage: storage })

app.post('/api/upload', upload.single('file'), (req, res)=>{
    res.status(200).json("File has been uploaded")
})



app.use('/api/auth', authRoute )
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)


app.listen('5000', ()=>{
    console.log('App is running 5000');
})