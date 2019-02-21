const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SpaceX Retail Product Schema 
let ProductSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    price: { type: Number, required: true},
    color: { type: String, required: false },
    size: { type: String, required: false },
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);