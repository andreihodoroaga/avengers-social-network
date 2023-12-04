CREATE TABLE User (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR UNIQUE NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    date_of_birth DATE NOT NULL,
    bio VARCHAR,
    profile_picture VARCHAR
);

CREATE TABLE Event (
    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_organiser_user_id INTEGER NOT NULL,
    location VARCHAR NOT NULL,
    created_timestamp DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    event_timestamp DATE NOT NULL,
    details VARCHAR NOT NULL,
    FOREIGN KEY (event_organiser_user_id) REFERENCES User(user_id)
);

CREATE TABLE Event_Participant (
    event_participant_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER NOT NULL,
    participant_id INTEGER NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Event(event_id),
    FOREIGN KEY (participant_id) REFERENCES User(user_id)
);

CREATE TABLE Post (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    parent_post_id INTEGER DEFAULT NULL,
    text VARCHAR NOT NULL,
    timestamp DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (parent_post_id) REFERENCES Post(post_id)
);

CREATE TABLE User_Interactions (
    user_interaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id_initiator INTEGER NOT NULL,
    user_id_receiver INTEGER NOT NULL,
    interaction_type VARCHAR NOT NULL CHECK(interaction_type IN ('FOLLOW', 'POKE')),
    timestamp DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id_initiator) REFERENCES User(user_id),
    FOREIGN KEY (user_id_receiver) REFERENCES User(user_id)
);

CREATE TABLE User_Post_Interactions (
    post_interaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    interaction_type VARCHAR NOT NULL CHECK(interaction_type IN ('LIKE', 'BOOKMARK', 'REPOST')),
    timestamp DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id)
);
