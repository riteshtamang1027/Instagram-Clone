import jwt from 'jsonwebtoken';

export const verifyToken = (req , res , next)=>{
    const token = req.headers["authorization"];
    // console.log(token,"This is verify token")
    if(!token){
        return res.status(401).json({ 
            message:"You are not authorize."
        })
    }

    const pureToken = token.split(" ")[1]
    console.log(pureToken);

    // verify a token symmetric
jwt.verify(
pureToken, process.env.JWT_SECRET, function(err, decoded) {
   if(err){
    return res.status(401).json({
        message:"Your are not authorization"
    })
   }
//    console.log(decoded);
   next()
  }
);
}
