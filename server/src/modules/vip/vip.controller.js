const { success } = require("../../utils/response");
const vipService = require("./vip.service");

const comingSoon = async (req, res) => {
  const data = await vipService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
