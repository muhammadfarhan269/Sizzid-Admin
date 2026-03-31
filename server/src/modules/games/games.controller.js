const { success } = require("../../utils/response");
const gamesService = require("./games.service");

const comingSoon = async (req, res) => {
  const data = await gamesService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
