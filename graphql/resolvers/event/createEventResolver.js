const db = require("../../../models");

const createEventResolver = async (_, { event }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  event.event_organiser_user_id = user.id;
  const newEvent = await db.Event.create(event);
  return newEvent;
};

module.exports = createEventResolver;
