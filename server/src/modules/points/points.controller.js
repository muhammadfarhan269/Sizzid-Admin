const { success } = require("../../utils/response");
const pointsService = require("./points.service");

const comingSoon = async (req, res) => {
  const data = await pointsService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
