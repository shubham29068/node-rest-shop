const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
      // validation of string and number require: true and type: also
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);