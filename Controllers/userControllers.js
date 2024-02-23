const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

exports.addUser = async (req, res) => {
  const { user, pwd, email } = req.body;
  if (!user || !pwd || !email) {
    return res
      .status(400)
      .json({ message: "Bad Request Please enter the details" });
  }

  const alreadyUser = await users.findOne({ user }).exec();
  const alreadyEmail = await users.findOne({ email }).exec();
  if (alreadyUser) {
    return res.status(409).json({ message: "user already exists" });
  } else if (alreadyEmail) {
    return res.status(409).json({ message: "email already exists" });
  }

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = await users.create({
      user: user,
      email: email,
      pwd: hashedPwd,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server not responding" });
  }
};

exports.loginUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Bad Request Please enter the details" });
  }
  const foundUser = await users.findOne({ user }).exec();
  if (!foundUser) return res.sendStatus(404);
  const matchPwd = await bcrypt.compare(pwd, foundUser.pwd);
  if (matchPwd) {
    const roles = Object.values(foundUser.roles).filter(Boolean);

    const accessToken = jwt.sign(
      { "UserInfo": { "user": foundUser.user, "roles": roles } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { "user": foundUser.user },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite:"None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ roles, accessToken });
  } else {
    res.sendStatus(401);
  }
};
