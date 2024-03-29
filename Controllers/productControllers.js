const product = require("../models/productSchema");

exports.addProduct = async (req, res) => {
  
  const addedData = req.body;
  const {
    name,
    image,
    size0,
    sell0,
    weight0,
    price0,
    size1,
    sell1,
    weight1,
    price1,
    size2,
    sell2,
    weight2,
    price2,
    size3,
    sell3,
    weight3,
    price3,
    size4,
    sell4,
    weight4,
    price4,
    size5,
    sell5,
    weight5,
    price5,
    size6,
    sell6,
    weight6,
    price6,
    size7,
    sell7,
    weight7,
    price7,
    size8,
    sell8,
    weight8,
    price8,
    size9,
    sell9,
    weight9,
    price9,
    size10,
    sell10,
    weight10,
    price10,
    size11,
    sell11,
    weight11,
    price11,
    size12,
    sell12,
    weight12,
    price12,
    size13,
    sell13,
    weight13,
    price13,
    size14,
    sell14,
    weight14,
    price14,
    size15,
    sell15,
    weight15,
    price15,
  } = addedData;
  if (!name || !image || !size0 || !sell0 || !weight0 || !price0) {
    res.status(401).json("Some initial values are required");
  }
  try {
    const alreadyExist = await product.findOne({ name: name });
    if (alreadyExist) {
      res.status(409).json("This product already exists in our database");
    } else {
      const newProduct = new product({
        name,
        image,
        size0,
        sell0,
        weight0,
        price0,
        size1,
        sell1,
        weight1,
        price1,
        size2,
        sell2,
        weight2,
        price2,
        size3,
        sell3,
        weight3,
        price3,
        size4,
        sell4,
        weight4,
        price4,
        size5,
        sell5,
        weight5,
        price5,
        size6,
        sell6,
        weight6,
        price6,
        size7,
        sell7,
        weight7,
        price7,
        size8,
        sell8,
        weight8,
        price8,
        size9,
        sell9,
        weight9,
        price9,
        size10,
        sell10,
        weight10,
        price10,
        size11,
        sell11,
        weight11,
        price11,
        size12,
        sell12,
        weight12,
        price12,
        size13,
        sell13,
        weight13,
        price13,
        size14,
        sell14,
        weight14,
        price14,
        size15,
        sell15,
        weight15,
        price15,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    }
  } catch (error) {
    res.status(401).json(error);
    console.log(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let { page, limit, search } = req.query;
    page = parseInt(page) || 1; 
    limit = parseInt(limit) || 10; 
    const skip = (page - 1) * limit;

    let query = {};

    if (search) {
      query = { name: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await product.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);
    const products = await product.find(query).skip(skip).limit(limit);

    res.status(200).json({
      products,
      currentPage: page,
      totalPages,
      totalCount
    });
  } catch (error) {
    res.status(500).json({message:"Internal Error"});
  }
};

exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productData = await product.findOne({ _id: id });
    res.status(200).json(productData);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  
  const { id } = req.params;
  const updateData = req.body;
  const {
    name,
    image,
    size0,
    sell0,
    weight0,
    price0,
    size1,
    sell1,
    weight1,
    price1,
    size2,
    sell2,
    weight2,
    price2,
    size3,
    sell3,
    weight3,
    price3,
    size4,
    sell4,
    weight4,
    price4,
    size5,
    sell5,
    weight5,
    price5,
    size6,
    sell6,
    weight6,
    price6,
    size7,
    sell7,
    weight7,
    price7,
    size8,
    sell8,
    weight8,
    price8,
    size9,
    sell9,
    weight9,
    price9,
    size10,
    sell10,
    weight10,
    price10,
    size11,
    sell11,
    weight11,
    price11,
    size12,
    sell12,
    weight12,
    price12,
    size13,
    sell13,
    weight13,
    price13,
    size14,
    sell14,
    weight14,
    price14,
    size15,
    sell15,
    weight15,
    price15,
  } = updateData;
  if (!name || !image || !size0 || !sell0 || !weight0 || !price0) {
    res.status(401).json("Some initial values are required");
  }
  try {
    const alterProduct = await product.findByIdAndUpdate(
      { _id: id },
      {
        name,
        image,
        size0,
        sell0,
        weight0,
        price0,
        size1,
        sell1,
        weight1,
        price1,
        size2,
        sell2,
        weight2,
        price2,
        size3,
        sell3,
        weight3,
        price3,
        size4,
        sell4,
        weight4,
        price4,
        size5,
        sell5,
        weight5,
        price5,
        size6,
        sell6,
        weight6,
        price6,
        size7,
        sell7,
        weight7,
        price7,
        size8,
        sell8,
        weight8,
        price8,
        size9,
        sell9,
        weight9,
        price9,
        size10,
        sell10,
        weight10,
        price10,
        size11,
        sell11,
        weight11,
        price11,
        size12,
        sell12,
        weight12,
        price12,
        size13,
        sell13,
        weight13,
        price13,
        size14,
        sell14,
        weight14,
        price14,
        size15,
        sell15,
        weight15,
        price15,
      }
    );
    res.status(200).json(alterProduct);
  } catch (error) {
    res.status(500).json({message:"Internal Server Error"});
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const removeProduct = await product.findByIdAndDelete({ _id: id });
    res.status(200).json(removeProduct);
  } catch (error) {
    res.status(401).json(error);
  }
};
