const db = require("../../../models");

const createEventResolver = async (_, { event }) => {
  const newEvent = await db.Event.create(event);
  return newEvent;
};

module.exports = createEventResolver;
