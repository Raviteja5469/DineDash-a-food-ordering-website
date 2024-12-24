import foodModel from '../models/foodmodel.js';
import fs from 'fs';

// Add food
const addFood = async (req, res) => {

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description:req.body.description,
    price: req.body.price, 
    category: req.body.category, 
    image: image_filename 

  })
  try {
    await food.save();
    res.json({success:true,message:"Food Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Failed to add food"})
  }
};

export { addFood };

