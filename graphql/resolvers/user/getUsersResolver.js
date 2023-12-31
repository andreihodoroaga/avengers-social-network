const db = require("../../../models");

const getUsersResolver = async () => {
    const users = await db.User.findAll({
        include: [ {
            model: db.UserImage,
            as: "user_image",
            attributes: ["profile_picture_path"],
        }],
    });

    const mappedUsers = users.map(user => {
        user.dataValues.profile_picture = user.user_image ? user.user_image.dataValues.profile_picture_path : null;
        return {
            ...user.dataValues,
        };
    });

    return mappedUsers;
};

module.exports = getUsersResolver;
