const db = require("../../models");

function findResolver(model) {
    return async (_, obj) => {
        const id = obj[`${model.toLowerCase()}_id`];
        const target = await db[model].findByPk(id);
        console.log(id);
        console.log(target);

        if (!target) {
            throw new Error(`${model} not found`);
        }

        return target;
    };
}

module.exports = findResolver;