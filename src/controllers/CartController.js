const express = require("express");
const User = require("../models/UserModel");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/:id",authenticate,async(req,res)=>{
    try {
        
        let user =await User.findById(req.user._id);
        await user.addToCart(req.params.id)
        return res.send({user});
        
    } catch (error) {
        console.log(error);
    }
    
})
router.post("/remove/:id",authenticate,async (req,res)=>{
    try {
        let user =await User.findById(req.user._id);
        await user.removeCartItem(req.params.id)
        return res.send({user});
    } catch (error) {
        console.log(error);
    }
})
router.post("/delete/:id",authenticate,async (req,res)=>{
    try {
        let user =await User.findById(req.user._id);
        await user.deleteCartItem(req.params.id)
        return res.send({user});
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;