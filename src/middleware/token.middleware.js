const jwt = require("jsonwebtoken")
const TokenMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(402).json({
                status: false,
                message: "token is not valid"
            })
        }

        if (!authHeader.startsWith(`Bearer `)) {
            return res.status(403).json({
                status: false,
                message: "Authorization format must be: Bearer <token>"
            })
        }
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECKREY_KEY, { algorithms: "HS256" })
        req.user = decoded
        next()
    } catch (error) {
        return new Error(error)
    }
}

module.exports = TokenMiddleware