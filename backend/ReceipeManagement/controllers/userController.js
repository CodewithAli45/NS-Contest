const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "AliMurtaza";


const signup = async(req, res) => {
    const {username, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        // console.log("existing ", existingUser);
        if(existingUser){
            return res.status(403).json({
                status: "failure", 
                msg: "user already registered"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, email, password: hashedPassword
        });

        await User.create(newUser);
        res.status(201).json({
            status: 'success',
            data: {
              newUser,
            },
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            error: err.message,
          });
    }
}

const login = async (req, res) => {

    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            status: "Error", 
            msg: "Please provide email and password"
        })
    }  

    try {
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({
                status: "failure", 
                msg: "user not registered, email is wrong"
            })
        }

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if(!passwordMatch){
            return res.status(400).json({
                status: "failure", 
                msg: "wrong password"
            })
        }
        const token = jwt.sign({
            username: existingUser.username,
            email: existingUser.email,
            id: existingUser._id
        }, JWT_SECRET);

        res.status(200).json({
            msg: "Logged in successfully",
            token
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            error: err.message,
          });
    }
}

const getAllRegisteredUser = async (req, res) => {
    try {
        const users = await User.find();
        if(users.length < 1){
            return res.status(404).json({
                status: "failure", 
                msg: "no user found"
            })
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
            error: err.message,
          });
    }
}

module.exports = {
    signup,
    login,
    getAllRegisteredUser
}