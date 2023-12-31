const jwt = require('jsonwebtoken');
const JWT_SECRET = 'newtonSchoolContest';

/*
Write a middleware function that checks if the user is logged in. The middleware should return a 401 status code with an error message in the JSON payload if the token is missing or invalid. 

The token can be extracted from req.headers.authorization

The middleware should have the following signature:
function protectUserRoutes(req: Request, res: Response, next: NextFunction) => void

Possible Cases:

Token is missing: { message: 'Authentication failed: Missing token.', status: 'error' } (401)
Token is invalid: { message: 'Authentication failed: Invalid token.', status: 'error' } (401)
*/



async function isLoggedIn(req, res, next){
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message: 'Authentication failed: Missing token.', 
            status: 'error'
        })
    }
    if(!jwt.verify(token, JWT_SECRET)){
        return res.status(401).json({
            message: 'Authentication failed: Invalid token.', 
            status: 'error'
        })
    }

    next();
}

module.exports = isLoggedIn;