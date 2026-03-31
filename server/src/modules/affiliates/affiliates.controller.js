const { success } = require("../../utils/response");
const affiliatesService = require("./affiliates.service");

const comingSoon = async (req, res) => {
  const data = await affiliatesService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
