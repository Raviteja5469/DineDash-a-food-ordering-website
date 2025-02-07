import foodModel from '../models/foodmodel.js';
import fs from 'fs';

// Add food
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  // Create a data string for logging
  const dataString = `Food Item: ${food.name}, Description: ${food.description}, Price: ${food.price}, Category: ${food.category}, Image: ${food.image}`;

  try {
    await food.save();
    console.log(dataString); // Log the data string
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to add food" });
  }
};
// all food list

const listFood =async(req,res)=>{
  try{
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
  }catch(error){
    console.log(error);
    res.json({success:false,message:"Failed to get food list"})
  }
}

// remove food item

const removefood =async(req,res)=>{
  try{
    const Food =await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${Food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"food is removed"})
  }catch(error){
    console.log(error);
    res.json({success:false,message:"Failed to remove fooditem"})
  }
}

export { addFood,listFood,removefood};
