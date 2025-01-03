import Product from "../models/Product.js";

export async function create(req, res){
    try {
        const {name, description, price, stock=0, category} = req.body;
        let newProduct = {
            name,
            description,
            price,
            stock,
            category
        }
        newProduct = await Product.create(newProduct);
        return res.status(201).json(newProduct);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500)
    }
}

export async function getAllProducts(req, res){
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500)
    }
}

export async function getById(req, res){
    try {
        console.log("object")
        const id = req.params.id;
        console.log(id)
        const product = await Product.findOne({_id: id});
        if(!product) return res.json("product not found");
        return res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500)
    }
}

export async function updateProduct(req, res) {
    try {
        const {id} = req.params;
        const {name, description, price, stock, category} = req.body;
        await Product.updateOne({_id:id},{
            name:name,
            description:description,
            price:price,
            stock:stock,
            category:category
        });
        return res.sendStatus(200)

    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500)
    }
}

export async function deleteById(req, res) {
    try {
        const id = req.params.id;
        await Product.deleteOne({_id:id});
        return res.sendStatus(200)
    } catch (error) {
        console.log(error.message);
        return res.sendStatus(500)
    }
}