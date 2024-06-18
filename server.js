import Express from 'express'
import Path from 'path'

const app = Express()
const dir = Path.resolve()
const dir_front = "frontend/build"

app.use(Express.static(dir_front))
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.listen('5000', function(){
    console.log("El sevidor se ha iniciado correctamente")
})

app.get('/', function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
    console.log(dir + "/" + dir_front + "/index.html")
})

app.get("/home", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/register_page", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/login", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/consult", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.get("/record_activity", function(req, res){
    res.sendFile(dir + "/" + dir_front + "/index.html")
})

app.post("/register_user", function(req, res){
    let {name, lastName, idUser, email, password, confpassword} = req.body
    console.log(name + " " + lastName + " " + idUser + " " + email + " " + password + " " + confpassword)
    res.redirect("/")
});

app.post("/login_user", function(req, res){
    let {idUser, password} = req.body
    console.log(idUser + " " + password)
    res.redirect("/")
});

app.post("/recordActivity", function(req, res){
    let {idUser, idAct, dateAct, timeAct, DescripAct} = req.body
    console.log(idUser + " " + idAct + " " + dateAct + " " + timeAct + " " + DescripAct)
    res.redirect("/")
});

app.post("/consult_user", function(req, res){
    let {idUser} = req.body
    console.log(idUser)
    res.redirect("/")
});
