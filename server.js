const express = require("express")
const localStorage = require("localStorage")
const db = require("./db")
const auth = require('./auth')
const expressLayout = require("express-ejs-layouts")
const { search, share, save, del } = require("./db")
const signin = require("./auth")
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
var uid  =  ""
app.get("/", async (req, res) => {
  uid = await  signin()
  var data = await save("urls",uid)
  res.render("index", {data})
})
app.set("view engine", "ejs")
app.listen(process.env.PORT || 3000)
app.post("/", async (req, res) => {
  res.redirect("/")
  var id = share(req.body.url,uid)
  
})
app.get("/:id", async (req, res) => {
  const id = req.params.id
  const url = search(id,uid)  
  const redirectUrl = (await url).toString()
  res.redirect(redirectUrl)
})
app.post("/del", async (req, res) => {
  var id = req.body.id
  del(id,uid)
  res.redirect("/")
})

app.use(expressLayout)
