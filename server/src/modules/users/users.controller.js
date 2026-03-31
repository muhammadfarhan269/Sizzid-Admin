const { success } = require("../../utils/response");
const usersService = require("./users.service");

const comingSoon = async (req, res) => {
  const data = await usersService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
