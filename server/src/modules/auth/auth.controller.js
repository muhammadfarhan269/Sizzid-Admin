const { success } = require("../../utils/response");
const authService = require("./auth.service");

const comingSoon = async (req, res) => {
  const data = await authService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
