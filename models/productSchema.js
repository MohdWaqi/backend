const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
  size0: {
    type: Number,
  },
  sell0: {
    type: String,
  },
  weight0: {
    type: Number,
  },
  price0: {
    type: String,
  },
  size1: {
    type: Number,
  },
  sell1: {
    type: String,
  },
  weight1: {
    type: Number,
  },
  price1: {
    type: String,
  },
  size2: {
    type: Number,
  },
  sell2: {
    type: String,
  },
  weight2: {
    type: Number,
  },
  price2: {
    type: String,
  },
  size3: {
    type: Number,
  },
  sell3: {
    type: String,
  },
  weight3: {
    type: Number,
  },
  price3: {
    type: String,
  },
  size4: {
    type: Number,
  },
  sell4: {
    type: String,
  },
  weight4: {
    type: Number,
  },
  price4: {
    type: String,
  },
  size5: {
    type: Number,
  },
  sell5: {
    type: String,
  },
  weight5: {
    type: Number,
  },
  price5: {
    type: String,
  },
  size6: {
    type: Number,
  },
  sell6: {
    type: String,
  },
  weight6: {
    type: Number,
  },
  price6: {
    type: String,
  },
  size7: {
    type: Number,
  },
  sell7: {
    type: String,
  },
  weight7: {
    type: Number,
  },
  price7: {
    type: String,
  },
  size8: {
    type: Number,
  },
  sell8: {
    type: String,
  },
  weight8: {
    type: Number,
  },
  price8: {
    type: String,
  },
  size9: {
    type: Number,
  },
  sell9: {
    type: String,
  },
  weight9: {
    type: Number,
  },
  price9: {
    type: String,
  },
  size10: {
    type: Number,
  },
  sell10: {
    type: String,
  },
  weight10: {
    type: String,
  },
  price10: {
    type: String,
  },
  size11: {
    type: Number,
  },
  sell11: {
    type: String,
  },
  weight11: {
    type: Number,
  },
  price11: {
    type: String,
  },
  size12: {
    type: Number,
  },
  sell12: {
    type: String,
  },
  weight12: {
    type: Number,
  },
  price12: {
    type: String,
  },
  size13: {
    type: Number,
  },
  sell13: {
    type: String,
  },
  weight13: {
    type: Number,
  },
  price13: {
    type: String,
  },
  size14: {
    type: Number,
  },
  sell14: {
    type: String,
  },
  weight14: {
    type: Number,
  },
  price14: {
    type: String,
  },
  size15: {
    type: Number,
  },
  sell15: {
    type: String,
  },
  weight15: {
    type: Number,
  },
  price15: {
    type: String,
  },
});

const product = new mongoose.model("product", productSchema);

module.exports = product;
