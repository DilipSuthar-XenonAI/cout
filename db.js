const fire= require("./config")
const id = require("shortid")
const shortid = require("shortid")
const baseurl  = "http://localhost:3000/"
//function to store the url
const share = (url,uid) => {
  var generatedid = shortid.generate()
  fire.fire.collection("users").doc(uid).collection("urls").doc(generatedid).set({
    url,
  })
  return generatedid
}

///function to fetch the url
const search = async (id,uid) => {
  var url = ""
  await fire.fire
    .collection("users").doc(uid).collection("urls")
    .get()
    .then((snapshot) => {
      
        snapshot.docs.forEach((doc) => {
          var status = false
          if (doc.id == id) {
            url = doc.data().url
            status = true
          }
        })
      
    })
  return url
}

const save = async (c,uid) => {
  var data = []
  
  await fire.fire.collection("users").doc(uid).collection("urls").get().then((snapshot) => {
    snapshot.docs.forEach((e) => {
      data.push({
        id :e.id,
        surl:baseurl + e.id,
        url: e.data().url
      })
    })
  })
  return data
}
const del = async (id,uid) => {
  await fire.fire.collection("users").doc(uid).collection("urls").doc(id).delete().catch(() => {
    console.log("error")
  })
}
module.exports = { share, search, save,del}
