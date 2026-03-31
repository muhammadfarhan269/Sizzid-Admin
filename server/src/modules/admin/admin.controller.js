const { success } = require("../../utils/response");
const adminService = require("./admin.service");

const comingSoon = async (req, res) => {
  const data = await adminService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
