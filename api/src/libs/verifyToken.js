import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export async function verifyToken(req, res, next) {
  // Get the token from the headers
  const token = req.headers["x-access-token"];

  // if does not exists a token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }
  try {

    // decode the token
    const decoded = await jwt.verify(token, config.secret);
    console.log(decoded,"sdfsdfd")
    // save the token on request object to using on routes
    const user = await User.findById(decoded.id, { password: 0 });

    if (!user) {
      return res.status(404).send("No user found.");
    }
    req.userId = decoded.id;
  } catch (error) {
    return res.status(400).send("jwt is incorrect");

  }

  // continue with the next function
  next();
}
