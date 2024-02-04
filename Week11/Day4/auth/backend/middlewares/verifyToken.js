import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifytoken = (req, res, next) => {
  const accesstoken = req.cookies.token || req.headers["x-access-token"];

  if (!accesstoken) return res.status(401).json({ msg: "Unauthorized" });

  jwt.verify(accesstoken, process.env.JWT_SECRET, (err, decode) => {
    if (err) return res.status(403).json({ error: err.message, msg: "forbidden" });
    // console.log(decode);
    next();
  });
};

// export const verifytoken = (req, res, next) => {

//     const accesstoken = req.cookies.token;

//     jwt.verify(accesstoken, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         res.status(401).json({ msg: "Unauthorized" });
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
// }
