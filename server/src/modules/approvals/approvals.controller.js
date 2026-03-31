const { success } = require("../../utils/response");
const approvalsService = require("./approvals.service");

const comingSoon = async (req, res) => {
  const data = await approvalsService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
