const db = require("../../../models");

const participateEventResolver = async (_, { event_id }, user) => {
    if (!user) {
        throw new Error("Unauthorized");
    }
    const event = await db.Event.findByPk(event_id);
    
    if (!event) {
        throw new Error("Event not found");
    }

    const eventParticipantObject = {
        'event_id': event_id, 
        'participant_id': user.user_id,
    }; 

    const existingParticipation = await db.EventParticipant.findOne({
        where: eventParticipantObject,
    });

    if (existingParticipation) {
        throw new Error("User already participates in this event");
    }

    const newEventParticipant = await db.EventParticipant.create(eventParticipantObject);
    return newEventParticipant;
};

module.exports = participateEventResolver;
