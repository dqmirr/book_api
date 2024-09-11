const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()

class Books {
    static async get(req, res){
        
            const books = await prisma.books.findMany();
            
            if(books.length===0){
                return res.status(404).json({message:"data not found"})
            }else{
                return res.status(200).json(books)
            }
        
        
    }

    static async insert(req, res){
         try {
            const {title, author} = req.body;
            const book = await prisma.books.create({data: {title, author}})
            return res.status(201).json(book)
        } catch (error) {
            return res.status(500).json({message:typeof prisma.books})
        }
    }

    static async update(req, res){
         try {
            const { id } = req.params
            const {title, author} = req.body;
            const book = await prisma.books.update({data: {title, author}})
            return res.status(201).json(book)
        } catch (error) {
            return res.status(500).json({message:typeof prisma.books})
        }
    }

    static async update(req, res){
        //  try {
            
        // } catch (error) {
        //     return res.status(500).json({message:"server error"})
        // }
            const {title, author} = req.body;
            const book = await prisma.books.update({
                where:{id: Number(req.params.id)},
                data: {title, author} 
            });
            return res.status(201).json(book);
    }

    static async delete(req, res){
         try {
            const book = await prisma.books.delete({where:{
                id: Number(req.params.id)
            }
        })
            return res.status(201).json({message:"book deleted"})
        } catch (error) {
            return res.status(500).json({message:"server error"})
        }
    }
}

module.exports = Books 