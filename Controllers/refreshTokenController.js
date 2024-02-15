const users = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  console.log(cookies.jwt);
  const refreshToken = cookies.jwt;
  const foundUser = await users.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.user !== decoded.user) return res.sendStatus(403);
    const roles = Object.values(foundUser.roles);

    const accessToken = jwt.sign(
      { "UserInfo":{"user": decoded.user, "roles": roles }},
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.json({ roles, accessToken });
  });
};
