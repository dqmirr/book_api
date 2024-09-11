const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../middlewares/jwt");
const prisma = new PrismaClient();

class User {
    static async insert(req, res){
        try {
            const {username, password} = req.body;

            const book = await prisma.users.create({data: {username, password}})
            return res.status(201).json(book)
        } catch (error) {
            return res.status(500).json({message:"server error"})
        }
    }

    // static async login(req, res){
    //     try {
    //         const {
    //           username,
    //           password
    //         } = req.body

    //         const user = await User.findOne({
    //             where: {
    //               username: username
    //             }
    //           })
        
    //           if (!user) {
    //             throw {
    //               code: 404,
    //               message: "User not found"
    //             }
    //           }
        
    //           if (password !== user.password) {
    //             throw {
    //               code: 401,
    //               message: "Incorrect password"
    //             }
    //           }
        
    //           const response = {
    //             id: user.id,
    //             email: user.email,
    //             username: user.username
    //           }
        
    //           const token = generateToken(response)
        
    //           res.status(200).json({
    //             token
    //           })
        
    //       } catch (error) {
    //         res.status(500).json({message:"server error"})
            
    //       }

    // }
}

module.exports = User