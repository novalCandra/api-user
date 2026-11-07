const { createUsersModule, selectUsersModue } = require("../models/users.models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userlogincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;

        const usersSelect = await selectUsersModue(email)
        const hasVerfifikasi = await bcrypt.compare(password, usersSelect.password)
        if (!hasVerfifikasi) {
            return res.status(402).json({
                status: false,
                message: "email or password not found in database"
            })
        }

        const createLogin = jwt.sign(
            {
                id: usersSelect.id, email: usersSelect.email
            },
            process.env.JWT_SECKREY_KEY,
            {
                expiresIn: "1hr",
                algorithm: "HS256"
            }
        )

        return res.status(200).json({
            status: true,
            message: "success login",
            data: {
                token: createLogin
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}

const userregistercontroller = async (req, res) => {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    try {
        const request = await createUsersModule({
            name, email, password: hashPassword
        });
        if (!request) {
            return res.status(401).json({
                status: false,
                message: "gagal create accounts"
            })
        } else {
            return res.status(201).json({
                status: true,
                message: "success create accounts",
                data: {
                    name,
                    email
                }
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error?.message
        })
    }
}


module.exports = {
    userlogincontroller,
    userregistercontroller
}