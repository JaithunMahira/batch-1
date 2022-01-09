const restaurantModel = require('../models/restaurauntModel');

module.exports.registerRestaurant = async function registerRestaurant(req,res)
{
    try{
        let dataObj = req.body;
        console.log(req.id);
        dataObj.restaurantId = req.id;
        console.log(dataObj);
        let restaurant = await restaurantModel.create(dataObj);

        if(restaurant)
        {
            res.json({
                message:'restaurant has successfully signed up',
                data : restaurant
            });
        }
        else
        {
            res.json({
                message:'error while signing up'
            });
        }
    }
    catch(err)
    {
        res.status(500).json({
            message:err.message
        });
    }
};

module.exports.getRestaurant = async function getRestaurant(req,res)
{
    try
    {
        let rid = req.id;
        let restaurant = await restaurantModel.find({restaurantId:rid});
        
        if(restaurant)
        {
            return res.json(restaurant);
        }
        else
        {
            return res.json({
                message:'Restaurant not Found'
            });
        }
    }catch(err)
    {
        res.status(500).json({
            message:err.message
        });
    }
};

module.exports.updateRestaurant = async function updateRestaurant(req,res)
{
    try
    {
        let rid = req.id;
        let dataToUpdate = req.body;

        if(!dataToUpdate.restaurantName)
        {
            return res.json({
                message:'Restaurant Name required to change details'
            });
        }
        
        let restaurant = await restaurantModel.findOne({restaurantId:rid,restaurantName:dataToUpdate.restaurantName});
        if(restaurant)
        {
            let oldData = await restaurantModel.findOneAndUpdate({restaurantId:rid,restaurantName:dataToUpdate.restaurantName},dataToUpdate);
            res.json({
                message:'Data updated successfully',
                oldData: oldData,
                updatedFields: dataToUpdate
            });
        }
        else
        {
            res.json({
                message:'Restaurant not Found'
            });
        }
    }catch(err)
    {
        res.status(500).json({
            message:err.message
        });
    }
    
}
