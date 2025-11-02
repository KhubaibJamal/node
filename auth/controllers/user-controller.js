
const User = require('../models/user-model');
const bcrypt = require('bcrypt');


// POST /user/register
const registerUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function (err, hash) {
                if (err) {
                    return res.status(500).json({ message: "Error hashing password", error: err });
                }

                req.body.password = hash;

                const newUser = new User(req.body);
                await newUser.save();
                const userResponse = newUser.toObject();
                delete userResponse.password;
                res.status(201).json({ message: "User registered successfully", user: userResponse });
            });
        });

    } catch (error) {
        return res.status(500).json({ message: "Error registering user", error });
    }
};

// POST /user/login
const loginUser = async (req, res) => {
    try {
        const email = req.body.email?.trim();
        const password = req.body.password;

        const existingUser = await User.findOne({ email }).select('+password');

        if (!existingUser) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }


        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
        );

        const userResponse = existingUser.toObject();
        delete userResponse.password;

        res.status(200).json({
            message: "Login successful",
            token,
            user: userResponse
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in", error });
    }
};


module.exports = { registerUser, loginUser };
