const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/constants');

const requireAuth = (resolverFunction) => {
    return async (parent, args, context, info) => {
        // Check if the user is authenticated
        const authorization = context.req.headers.authorization;
        if (!authorization) {
            throw new Error('Not authorized');
        }

        const token = authorization.replace('Bearer ', '');    
    
        try {
            const tokenPayload = jwt.verify(token, JWT_SECRET);
            context.tokenPayload = tokenPayload;
        } catch (e) { }  

        // Call the original resolver function with all its arguments
        return resolverFunction(parent, args, context, info);
    };
};

module.exports = requireAuth;
