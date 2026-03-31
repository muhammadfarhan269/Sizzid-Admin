const { success } = require("../../utils/response");
const promotionsService = require("./promotions.service");

const comingSoon = async (req, res) => {
  const data = await promotionsService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
