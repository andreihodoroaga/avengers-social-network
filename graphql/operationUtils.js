
const requireAuth = require('./resolvers/authenticatedResolver');

function requireAuthorization(operation) {
    const newOperation = { ...operation};
    newOperation.resolve = requireAuth(operation.resolve);
    return newOperation;
}

module.exports = requireAuthorization;