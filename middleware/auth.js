const jwt = require('jsonwebtoken');

function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).send('Access denied.No token found.');
    }
    else{
        try{   
            const decoded = jwt.verify(token,"jwtPrimaryKey");
            console.log(decoded,"gethttpOptions decoded ");
            req.user = decoded;
            next();
        }
        catch(err){
            return res.status(599).json({
                code : 599,
                message : 'Session timeout',
                data : []
            });
        }
    }
}
module.exports = auth;