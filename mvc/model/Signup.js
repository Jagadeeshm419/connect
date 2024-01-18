const Signup = require('../model/user')
const bcrypt = require('bcryptjs')

const posting = async (req, res) => {

//New User: 
    const testpwd = bcrypt.hashSync(password)
    const user = new Signup({
        username,
        email,
        password: testpwd,
    })
    try {
        await user.save()
    }
    catch (err) {
        console.log(err);
    }
    return res.status(201).json({ user })
}

//Existing User: 
const { username, email, password } = req.body;

try {
    let existingUser = await Signup.findOne({ email: email })

    if (existingUser) {
        return res.status(404).json({ message: 'User Already Exist' })
    }
}
catch (err) {
    console.log(err)
}


module.exports = {
    posting,
}
