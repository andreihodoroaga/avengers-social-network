const db = require("../../../models");
const fs = require("fs");

const deleteUserImageResolver = async (_a, _b, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetUserImage = await db.UserImage.findOne({
    where: {
      user_id: user.id,
    },
  });

  if (!targetUserImage) {
    return null;
  }

  try {
    const imagePath = targetUserImage.profile_picture_path;
    // delete the image 
    fs.unlinkSync(imagePath);

    await targetUserImage.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserImageResolver;
