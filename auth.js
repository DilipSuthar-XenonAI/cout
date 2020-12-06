const auth = require('./config')
const signin = async () => {
    var uid = ""
    await auth.auth.signInAnonymously().then((users) => {
        uid = users.user.uid
    });
    return uid
}
module.exports = signin