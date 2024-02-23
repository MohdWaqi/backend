const users = require("../models/userSchema"); 

exports.handleLogout = async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204);    
    const refreshToken = cookies.jwt
     
    const foundUser = await users.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie("jwt", { httpOnly: true});
        return res.sendStatus(204);
    }
    foundUser.refreshToken = "";
    const result = await foundUser.save();
    res.clearCookie("jwt", { httpOnly: true });
    res.sendStatus(204);
  }
  