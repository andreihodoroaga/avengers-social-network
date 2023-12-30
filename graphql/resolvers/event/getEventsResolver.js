const db = require("../../../models");

const getEventsResolver = async () => {
    const events = await db.Event.findAll({
        include: [ {
            model: db.User,
            as: "event_participants",
            attributes: ["user_id"],
        }],
    });

    const mappedEvents = events.map(event => {
        return {
            ...event.dataValues,
            event_participants: event.event_participants.map(participant => participant.user_id),
        };
    });

    return mappedEvents;
};

module.exports = getEventsResolver;