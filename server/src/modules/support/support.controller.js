const { success } = require("../../utils/response");
const supportService = require("./support.service");

const comingSoon = async (req, res) => {
  const data = await supportService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
