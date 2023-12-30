const db = require("../../../models");

const updateEventResolver = async (_, { event_id, event }) => {
  const targetEvent = await db.Event.findByPk(event_id);

  if (!targetEvent) {
    return null;
  }

  const updatedEvent = await targetEvent.update({
    ...event,
  }, {
    where: {
      event_id: event_id
    },
  });

  return updatedEvent;
};

module.exports = updateEventResolver;
