const { success } = require("../../utils/response");
const leaderboardService = require("./leaderboard.service");

const comingSoon = async (req, res) => {
  const data = await leaderboardService.comingSoon();
  return success(res, data, "coming soon");
};

module.exports = { comingSoon };
