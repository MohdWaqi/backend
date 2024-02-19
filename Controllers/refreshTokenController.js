const users = require("../models/userSchema");
const jwt = require("jsonwebtoken");

exports.handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({message: "Cannot find any authentication tokens"});
  const refreshToken = cookies.jwt;
  try {
    
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
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  
};
