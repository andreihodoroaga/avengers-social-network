const db = require("../../../models");

const updateEventResolver = async (_, { event_id, event }) => {
  const targetEvent = await db.Event.findByPk(event_id);

  if (!targetEvent) {
    return null;
  }

  const updatedEvent = await db.Event.update({
    ...event,
  });

  return updatedEvent;
};

module.exports = updateEventResolver;
