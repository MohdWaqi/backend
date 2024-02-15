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
    type: Number,
  },
  weight0: {
    type: Number,
  },
  price0: {
    type: Number,
  },
  size1: {
    type: Number,
  },
  sell1: {
    type: Number,
  },
  weight1: {
    type: Number,
  },
  price1: {
    type: Number,
  },
  size2: {
    type: Number,
  },
  sell2: {
    type: Number,
  },
  weight2: {
    type: Number,
  },
  price2: {
    type: Number,
  },
  size3: {
    type: Number,
  },
  sell3: {
    type: Number,
  },
  weight3: {
    type: Number,
  },
  price3: {
    type: Number,
  },
  size4: {
    type: Number,
  },
  sell4: {
    type: Number,
  },
  weight4: {
    type: Number,
  },
  price4: {
    type: Number,
  },
  size5: {
    type: Number,
  },
  sell5: {
    type: Number,
  },
  weight5: {
    type: Number,
  },
  price5: {
    type: Number,
  },
  size6: {
    type: Number,
  },
  sell6: {
    type: Number,
  },
  weight6: {
    type: Number,
  },
  price6: {
    type: Number,
  },
  size7: {
    type: Number,
  },
  sell7: {
    type: Number,
  },
  weight7: {
    type: Number,
  },
  price7: {
    type: Number,
  },
  size8: {
    type: Number,
  },
  sell8: {
    type: Number,
  },
  weight8: {
    type: Number,
  },
  price8: {
    type: Number,
  },
  size9: {
    type: Number,
  },
  sell9: {
    type: Number,
  },
  weight9: {
    type: Number,
  },
  price9: {
    type: Number,
  },
  size10: {
    type: Number,
  },
  sell10: {
    type: Number,
  },
  weight10: {
    type: Number,
  },
  price10: {
    type: Number,
  },
  size11: {
    type: Number,
  },
  sell11: {
    type: Number,
  },
  weight11: {
    type: Number,
  },
  price11: {
    type: Number,
  },
  size12: {
    type: Number,
  },
  sell12: {
    type: Number,
  },
  weight12: {
    type: Number,
  },
  price12: {
    type: Number,
  },
  size13: {
    type: Number,
  },
  sell13: {
    type: Number,
  },
  weight13: {
    type: Number,
  },
  price13: {
    type: Number,
  },
  size14: {
    type: Number,
  },
  sell14: {
    type: Number,
  },
  weight14: {
    type: Number,
  },
  price14: {
    type: Number,
  },
  size15: {
    type: Number,
  },
  sell15: {
    type: Number,
  },
  weight15: {
    type: Number,
  },
  price15: {
    type: Number,
  },
});

const product = new mongoose.model("product", productSchema);

module.exports = product;
