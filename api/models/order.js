const mongoose = require('mongoose');

// schema show how data should look 
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // validation of string and number require: true and type: also
    product: { type: mongoose.Schema.Types.ObjectId, ref:'Product', required: true},
    quantity: {type: Number, default: 1}
});

module.exports = mongoose.model('Order',orderSchema) 