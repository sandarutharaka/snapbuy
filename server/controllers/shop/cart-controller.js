const Cart = require ('../../models/Cart')
const Product=require ('../../models/Product')


const addToCart = async(req,res)=>{
    try {

        const {userId,productId,quatity} = req.body;
        if(!userId || !productId || quatity< 0) {
            return res.status(400).json({
                success :false,
                message : 'Invalid data provided'
            })
        }


        const product = await Product.findById(productId)

        if(!product){
            return res.status(400).json({
                success :false,
                message : 'Product not found'
            })
        }


        let cart = await Cart.findOne({userId});
        if(!cart){
            cart = new Cart({userId,items :[]})
        }
        
        const findCurrentProductIndex =cart.items.findIndex(item=> item.productId.toString()=== productId);

        if(findCurrentProductIndex === -1){
            cart.items.push({productId, quatity})
        }else{
            cart.items[findCurrentProductIndex].quatity += quatity
        }

        await cart.save();
        res.status(500).json({
            success :true,
            data: cart
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            success :false,
            message : 'error'
        })
        
    }
}

const fetchCartItems = async(req,res)=>{
    try {

        const {userId} = req.params;
        if(!userId){
            return  res.status(500).json({
                success :false,
                message : 'User id is mandotary '
            })
        }

        const cart =await Cart.findOne({userId}).populate({
            path : 'item.productId',
            select : 'image title price salePrice'
        })

        if(!cart){
            return  res.status(500).json({
                success :false,
                message : 'Cart not found '
            })
        }


        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success :false,
            message : 'error'
        })
        
    }
}

const updateCartItemQuantity = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success :false,
            message : 'error'
        })
        
    }
}

const deleteCartItem = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success :false,
            message : 'error'
        })
        
    }
}

module.exports = {
    addToCart,
    updateCartItemQuantity,
    fetchCartItems,
    deleteCartItem
}