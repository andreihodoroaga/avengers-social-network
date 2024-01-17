const db = require("../../../models");

const updateEventResolver = async (_, { id, event }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetEvent = await db.Event.findByPk(id);

  if (!targetEvent) {
    return null;
  }

  if (user.id !== targetEvent.event_organiser_user_id) {
    throw new Error("Unauthorized");
  }

  const updatedEvent = await targetEvent.update({
    ...event,
  }, {
    where: {
      event_id: id
    },
  });

  return updatedEvent;
};

module.exports = updateEventResolver;
