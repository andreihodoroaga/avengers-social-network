
const requireAuth = require('./resolvers/authenticatedResolver');

function requireAuthorization(operation, f) {
    const newOperation = { ...operation};
    newOperation.resolve = requireAuth(operation.resolve, f);
    return newOperation;
}

module.exports = requireAuthorization;