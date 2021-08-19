const express = require('express')
const router = express.Router();
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

// User model
const User = require("../../model/User")


// User login requeest
router.post("/", (req, res) => {
    const { email, password } = req.body;

    // some validation
    if (!email || !password){
        return res.status(400).json({ msg: "Please Enter all fields"})
    }

    // check for existing users
    User.findOne({email}).then(user => {
        if(!user) {
            return res.status(400).json({ msg: "User does not exist"})
        }

    // Validate user password
    bcryptjs.compare(password, user.password).then((isMatch) => {
        if(!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials"})
        }
        jwt.sign(
            {id: user.id},
            config.get("barter_secret"),
            {expiresIn: 3600},
            (err, token) => {
                if (err) throw err;
                            res.status(200).json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name, 
                                    email: user.email,
                                    phone: user.phone,
                                    account_balance: user.account_balance,
                                    account_number: user.account_number
                                }
                            })
            }
        )
    })
    })
})


module.exports = router