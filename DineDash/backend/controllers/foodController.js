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

export { addFood };
