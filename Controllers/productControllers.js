const product = require("../models/productSchema");

exports.addProduct = async (req, res) => {
  const encryption =(num)=>{
    const secret = {"1": "a", "2": "p", "3": "r", "4": "i", "5": "l", "6": "j", "7": "u","8":"n", "9": "e","0":"#"}
    let encrypted = ""
    for (let i = 0; i < num.toString().length; i++) {
      encrypted += secret[num.toString()[i]]
    }
    return encrypted
  }
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
        sell0:sell0!=""?encryption(sell0):sell0,
        weight0,
        price0:price0!=""?encryption(price0):price0,
        size1,
        sell1:sell1!=""?encryption(sell1):sell1,
        weight1,
        price1:price1!=""?encryption(price1):price1,
        size2,
        sell2:sell2!=""?encryption(sell2):sell2,
        weight2,
        price2:price2!=""?encryption(price2):price2,
        size3,
        sell3:sell3!=""?encryption(sell3):sell3,
        weight3,
        price3:price3!=""?encryption(price3):price3,
        size4,
        sell4:sell4!=""?encryption(sell4):sell4,
        weight4,
        price4:price4!=""?encryption(price4):price4,
        size5,
        sell5:sell5!=""?encryption(sell5):sell5,
        weight5,
        price5:price5!=""?encryption(price5):price5,
        size6,
        sell6:sell6!=""?encryption(sell6):sell6,
        weight6,
        price6:price6!=""?encryption(price6):price6,
        size7,
        sell7:sell7!=""?encryption(sell7):sell7,
        weight7,
        price7:price7!=""?encryption(price7):price7,
        size8,
        sell8:sell8!=""?encryption(sell8):sell8,
        weight8,
        price8:price8!=""?encryption(price8):price8,
        size9,
        sell9:sell9!=""?encryption(sell9):sell9,
        weight9,
        price9:price9!=""?encryption(price9):price9,
        size10,
        sell10:sell10!=""?encryption(sell10):sell10,
        weight10,
        price10:price10!=""?encryption(price10):price10,
        size11,
        sell11:sell11!=""?encryption(sell11):sell11,
        weight11,
        price11:price11!=""?encryption(price11):price11,
        size12,
        sell12:sell12!=""?encryption(sell12):sell12,
        weight12,
        price12:price12!=""?encryption(price12):price12,
        size13,
        sell13:sell13!=""?encryption(sell13):sell13,
        weight13,
        price13:price13!=""?encryption(price13):price13,
        size14,
        sell14:sell14!=""?encryption(sell14):sell14,
        weight14,
        price14:price14!=""?encryption(price14):price14,
        size15,
        sell15:sell15!=""?encryption(sell15):sell15,
        weight15,
        price15:price15!=""?encryption(price15):price15,
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
    const productData = await product.find();
    res.status(200).json(productData);
  } catch (error) {
    res.status(401).json(error);
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
  const encryption =(num)=>{
    const secret = {"1": "a", "2": "p", "3": "r", "4": "i", "5": "l", "6": "j", "7": "u","8":"n", "9": "e","0":"#"}
    let encrypted = ""
    for (let i = 0; i < num.toString().length; i++) {
      encrypted += secret[num.toString()[i]]
    }
    return encrypted
  }
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
        sell0:(sell0!="" && !Number.isNaN(sell0/1))?encryption(sell0):sell0,
        weight0,
        price0:(price0!="" && !Number.isNaN(price0/1))?encryption(price0):price0,
        size1,
        sell1:sell1!="" && !Number.isNaN(sell1/1)?encryption(sell1):sell1,
        weight1,
        price1:price1!="" && !Number.isNaN(price1/1)?encryption(price1):price1,
        size2,
        sell2:sell2!="" && !Number.isNaN(sell2/1)?encryption(sell2):sell2,
        weight2,
        price2:price2!="" && !Number.isNaN(price2/1)?encryption(price2):price2,
        size3,
        sell3:sell3!="" && !Number.isNaN(sell3/1)?encryption(sell3):sell3,
        weight3,
        price3:price3!="" && !Number.isNaN(price3/1)?encryption(price3):price3,
        size4,
        sell4:sell4!="" && !Number.isNaN(sell4/1)?encryption(sell4):sell4,
        weight4,
        price4:price4!="" && !Number.isNaN(price4/1)?encryption(price4):price4,
        size5,
        sell5:sell5!="" && !Number.isNaN(sell5/1)?encryption(sell5):sell5,
        weight5,
        price5:price5!="" && !Number.isNaN(price5/1)?encryption(price5):price5,
        size6,
        sell6:sell6!="" && !Number.isNaN(sell6/1)?encryption(sell6):sell6,
        weight6,
        price6:price6!="" && !Number.isNaN(price6/1)?encryption(price6):price6,
        size7,
        sell7:sell7!="" && !Number.isNaN(sell7/1)?encryption(sell7):sell7,
        weight7,
        price7:price7!="" && !Number.isNaN(price7/1)?encryption(price7):price7,
        size8,
        sell8:sell8!="" && !Number.isNaN(sell8/1)?encryption(sell8):sell8,
        weight8,
        price8:price8!="" && !Number.isNaN(price8/1)?encryption(price8):price8,
        size9,
        sell9:sell9!="" && !Number.isNaN(sell9/1)?encryption(sell9):sell9,
        weight9,
        price9:price9!="" && !Number.isNaN(price9/1)?encryption(price9):price9,
        size10,
        sell10:sell10!="" && !Number.isNaN(sell10/1)?encryption(sell10):sell10,
        weight10,
        price10:price10!="" && !Number.isNaN(price10/1)?encryption(price10):price10,
        size11,
        sell11:sell11!="" && !Number.isNaN(sell11/1)?encryption(sell11):sell11,
        weight11,
        price11:price11!="" && !Number.isNaN(price11/1)?encryption(price11):price11,
        size12,
        sell12:sell12!="" && !Number.isNaN(sell12/1)?encryption(sell12):sell12,
        weight12,
        price12:price12!="" && !Number.isNaN(price12/1)?encryption(price12):price12,
        size13,
        sell13:sell13!="" && !Number.isNaN(sell13/1)?encryption(sell13):sell13,
        weight13,
        price13:price13!="" && !Number.isNaN(price13/1)?encryption(price13):price13,
        size14,
        sell14:sell14!="" && !Number.isNaN(sell14/1)?encryption(sell14):sell14,
        weight14,
        price14:price14!="" && !Number.isNaN(price14/1)?encryption(price14):price14,
        size15,
        sell15:sell15!="" && !Number.isNaN(sell15/1)?encryption(sell15):sell15,
        weight15,
        price15:price15!="" && !Number.isNaN(price15/1)?encryption(price15):price15,
      },
      { new: true }
    );
    await alterProduct.save();
    res.status(200).json(alterProduct);
  } catch (error) {
    res.status(401).json(error);
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
