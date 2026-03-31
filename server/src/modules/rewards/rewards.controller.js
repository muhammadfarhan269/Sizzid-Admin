const { success } = require("../../utils/response");
const rewardsService = require("./rewards.service");

const comingSoon = async (req, res) => {
  const data = await rewardsService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
