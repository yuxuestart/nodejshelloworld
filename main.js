let express = require("express")
let http = require("http")

let app = express()
let server = http.createServer(app)
app.use(express.static(__dirname+'/'))
app.get('/',function(req,res){
    res.sendFile(path.resolve("./index.html"))
})
app.listen(8080,()=>{
    console.log("Listening on port 8080")
})