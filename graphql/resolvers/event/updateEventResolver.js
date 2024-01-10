const db = require("../../../models");

const updateEventResolver = async (_, { event_id, event }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetEvent = await db.Event.findByPk(event_id);

  if (!targetEvent) {
    return null;
  }

  if (user.user_id !== targetEvent.event_organiser_user_id) {
    throw new Error("Unauthorized");
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
