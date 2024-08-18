const authService = require('../service/authService')


exports.addUserController = async(req,res) => {
    console.log("Working")
    const {name,pass} = req.body
    console.log(name + " " + pass)
    try{
        authService.addUser(name,pass)
        res.send("working")
    }
    catch(e){
        res.send("Error" + e)
    }
}