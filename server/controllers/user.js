const User = require('../models/user');
// const Order = require('../models/order');

exports.getUserById = async (req, res, next, id) => {

    try {

        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({
                error: "NO user found in  database"
            });
        }

        req.profile = user;
        next();
        
    } catch (error) {
        return res.status(400).json({
            error: "NO user found in  database"
        });
    }

    // User.findById(id).exec((err, user) => {
    //     if (err || !user) {
    //         return res.status(400).json({
    //             error: "NO user found in  database"
    //         })
    //     }
    //     req.profile = user;
    //     next();
    // });
};

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
};

exports.updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            {_id: req.profile._id},
            {$set: req.body},
            {new:true, useFindAndModify:false},
        );

        user.salt = undefined;
        user.encry_password = undefined;
        res.json(user)

    } catch (error) {

        return res.status(400).json({
            error: "You are not allowed to update this info"
        });
    }
};

exports.userPurchaseList = async (req, res) => {
    
    try {

        const order = await Order.find({user: req.profile._id}).populate("user", "_id name");

        res.json(order);
  
    } catch (error) {
        
        return res.status(400).json({
            error: "No orders in this account"
        });
    }
}

exports.pushOrderInPurchaseList = async (req, res, next) => {

    try {

        let purchases = [];

        req.body.order.products.forEach(product => {
            purchases.push({
                _id: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                quantity: product.quantity,
                amount: req.body.order.amount,
                transction_id: req.body.order.transction_id
            });
        });

        try {

            const purchases = await User.findOneAndUpdate(
                {_id: req.profile._id},
                {$push: {purchases: purchases}},
                {new:true},
            );

            next();

        } catch (error) {
            
            return res.status(400).json({
                error: "Unable to save purchase list"
            });
        }

        
        
    } catch (error) {
        
    }

}