const express = require('express')
const userRouter = require('./router/users')

console.log(express)

const app = express()
app.get("/", (req, res) => {
    console.log("home screen")
    res.send("Hello Folajomi!")
})

//routes
app.use("/users", userRouter)

app.listen(3000)
