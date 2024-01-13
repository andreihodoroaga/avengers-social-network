const db = require("../../../models");

const getEventsResolver = async (_a, _b, user) => {
    if (!user) {
        throw new Error("Unauthorized");
    }

    return db.Event.findAll();
};

module.exports = getEventsResolver;
