
const express = require("express")
const path = require("path")

const app = express()
app.set("views", "./views")
app.use(express.static("./views"))
app.set("view engine", "pug")

app.use(express.urlencoded({extended: false}))

let y 
let update = false
let employ =  [
    {username: "RedMan",name:"Elmo", age:6, email: "elmo@gmail.com", address: "Seasame Street"},
    {username: "MoistCritical", name: "Charlie", age: 24, email: "penguiz0@yahoo.com", address:"Panama, Flordia, Twitch Road"},
    {username: "Kanye West", name: "Ye", age: 41, email: "i<3kim@gmail.com", address:"HollyWood, California, Rich Road"},
    {username: "Markiplier", name: "Mark Fishbach", age: 30, email: "fnaf@yahoo.com", address:"Los Angeles, California"}
]

app.get("/", (req, res)=> {
    res.render("index")
})

app.post("/", (req, res)=> {
    if(update === true){
        employ[y].username = req.body.username
        employ[y].name = req.body.name
        employ[y].age = req.body.age
        employ[y].email = req.body.email
        employ[y].address = req.body.address
        update = false
    }
    res.render("index")
})

app.post("/login", (req, res)=> {
    employ.push({
        username: req.body.username,
        name: req.body.name ,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address ,
    })
    res.render("table", {
        user: employ
    })
})

app.get("/login", (req, res)=> {
    res.render("table", {
        user: employ
    })
})

app.get("/editUser/:username", (req, res) =>{
    for(let x = 0; x< employ.length; x++){
        if(employ[x].username === req.params.username){
            res.render("editUser", {
                user: employ[x]
            })
            y=x
            update = true
            return
        }
    }
})

app.get("/delete/:username", (req,res)=>{
    for(let x = 0; x<employ.length; x++){
        if(employ[x].username === req.params.username){
            employ.splice(x,1)
        }
    }
    res.render("table", {
        user: employ
    })
})

app.listen(3001, ()=> {
    console.log("listening on port 3001")
})