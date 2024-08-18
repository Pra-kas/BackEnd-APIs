const userModel = require('../model/userModel')

class authService{
    static async addUser(name,pass){
        try{
            const user = new userModel({ name, pass })
            await user.save()
            console.log("Working")
        }
        catch(e){
            console.log("authservice" + e)
            throw e
        }
     
    }
}

module.exports = authService
