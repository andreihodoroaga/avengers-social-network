const db = require("../../../models");
const path = require('path');
const fs = require('fs');

const createUserImageResolver = async (_, { userImage }, user) => {
    if (!user) {
        throw new Error("Unauthorized");
    }

    userImage.user_id = user.id;
    
    const existingUserImage = await db.UserImage.findOne({
        where: {
            user_id: userImage.user_id,
        },
    });
    if (existingUserImage) {
        throw new Error("User already has a profile picture");
    }

    const base64String = userImage.profile_picture_blob;
    const base64Image = base64String.split(';base64,').pop();
    const fileName = Date.now() + ".png";
    const fileLocation = path.resolve(__dirname, '../..') + "/uploads/" + fileName;

    console.log(fileLocation);
    fs.writeFile(fileLocation, base64Image, { encoding: 'base64' }, function(err) {
        if (err) {
            console.log(err);
            throw new Error("Failed to create file");
        }
        console.log('File created');
    });

    const object = {
        user_id: userImage.user_id,
        profile_picture_path: fileLocation,
    };

    const newUserImage = await db.UserImage.create(object);
    return newUserImage;
};

module.exports = createUserImageResolver;
