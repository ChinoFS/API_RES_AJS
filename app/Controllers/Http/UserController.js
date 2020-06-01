'use strict'
const User = use('App/Models/User')

class UserController {
    async login ({request, auth}){
        const {email, password} = request.all();
        const token = await auth.attempt(email,password);
        console.log("Llego peticion de app");
        return token;
        
    }


    async store({ request }) {
        const {username, email, password} = request.all();
        const user = await User.create({
            username,
            email,
            password
        });
        return user;
    }

    async index(){  
        return await User.all()
    }
}

module.exports = UserController
