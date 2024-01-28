import { Book } from "../models/bookModel.js";
 


export const createBook = async (req,res)=> {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book)

    }
    catch(err){
        console.log(req.body)
        console.log(err.message);
        res.status(500).send({message: err.message})
    }
}

export const getAllBooks = async (req,res)=> {
    try{
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message: err.message})
    }

}

export const getBookById = async (req,res)=> {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
}

export const updateBook = async (req,res)=> {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send("Send all required fields: title, author, publishYear")
        }
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id,req.body);

        if(!book){
            return res.status(400).send("Book not found")
        }
        else{
         return res.status(200).json({message:"Book updated successfully"})
        }


    }
    catch(err){
        console.log(err);
        res.status(500).send({message:err.message})
    }
}

export const deleteBook = async (req,res)=> {
    try{
        const {id} = req.params;

        const book = await Book.findByIdAndDelete(id);

        if(!book){
            return res.status(400).json({message: "Book not found"})
        }
        else{
            return res.status(200).json({message:"Book deleted successfully"})
        }
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
}