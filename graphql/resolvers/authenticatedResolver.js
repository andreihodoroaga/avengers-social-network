const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/constants');

const requireAuth = (resolverFunction, extractUserIdFromArgs) => {
    return async (parent, args, context, info) => {
        // Check if the user is authenticated
        const authorization = context.req.headers.authorization;
        if (!authorization) {
            throw new Error('Not authorized');
        }

        const token = authorization.replace('Bearer ', '');    
        const tokenPayload = jwt.verify(token, JWT_SECRET);
        const { exp, userId } = tokenPayload;

        if (Date.now() >= exp * 1000) {
            throw new Error('Token expired');
        }

        if (extractUserIdFromArgs) {
            const userIdFromArgs = Number(extractUserIdFromArgs(args));
            if (userIdFromArgs !== userId) {
                throw new Error('Not authorized');
            }
        }

        // Call the original resolver function with all its arguments
        return resolverFunction(parent, args, context, info);
    };
};

module.exports = requireAuth;
