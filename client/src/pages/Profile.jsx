import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changePasswordApi, getMyProfileApi, getMyStatsApi, updateMyProfileApi } from "../api/user";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import VipBadge from "../components/vip/VipBadge";
import VipProgressBar from "../components/vip/VipProgressBar";

export default function Profile() {
  const { data: profile, refetch } = useQuery({ queryKey: ["profile"], queryFn: getMyProfileApi });
  const { data: stats } = useQuery({ queryKey: ["profile-stats"], queryFn: getMyStatsApi });
  const [form, setForm] = useState({ username: "", avatarUrl: "" });
  const [pwd, setPwd] = useState({ currentPassword: "", newPassword: "" });

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      await updateMyProfileApi(form);
      toast.success("Profile updated");
      refetch();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    }
  };

  const changePwd = async (e) => {
    e.preventDefault();
    try {
      await changePasswordApi(pwd);
      toast.success("Password changed. Please login again.");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <Card className="flex items-center gap-3">
        <Avatar name={profile?.username} src={profile?.avatarUrl} className="h-12 w-12" />
        <div>
          <p className="font-semibold">{profile?.username}</p>
          <p className="text-sm text-slate-300">{profile?.email}</p>
        </div>
        <VipBadge tier={profile?.vipTier} />
      </Card>
      <Card>
        <form className="space-y-2" onSubmit={saveProfile}>
          <input className="w-full rounded border-dark-500 bg-dark-800" placeholder={profile?.username || "Username"} onChange={(e) => setForm((s) => ({ ...s, username: e.target.value }))} />
          <input className="w-full rounded border-dark-500 bg-dark-800" placeholder={profile?.avatarUrl || "Avatar URL"} onChange={(e) => setForm((s) => ({ ...s, avatarUrl: e.target.value }))} />
          <Button size="sm">Save profile</Button>
        </form>
      </Card>
      <Card>
        <p className="mb-2 font-semibold">Stats</p>
        <p>Games played: {stats?.totalGamesPlayed || 0}</p>
        <p>Best rank: {stats?.bestTournamentRank || "-"}</p>
        <p>Total earned: {stats?.totalPointsEarnedAllTime || 0}</p>
        <p>Current balance: {stats?.currentPointsBalance || 0}</p>
      </Card>
      <Card>
        <p className="mb-2 font-semibold">VIP progress</p>
        <VipProgressBar
          current={profile?.lifetimePoints || 0}
          next={profile?.vipTier === "BRONZE" ? 1000 : profile?.vipTier === "SILVER" ? 5000 : profile?.vipTier === "GOLD" ? 20000 : null}
          tier={profile?.vipTier}
        />
      </Card>
      <Card>
        <p className="mb-2 font-semibold">Referral code</p>
        <div className="flex items-center gap-2">
          <input readOnly className="w-full rounded border-dark-500 bg-dark-800" value={profile?.referralCode || ""} />
          <button
            className="rounded bg-dark-600 px-3 py-2"
            onClick={() => navigator.clipboard.writeText(profile?.referralCode || "")}
          >
            Copy
          </button>
        </div>
      </Card>
      <Card>
        <p className="mb-2 font-semibold">Change password</p>
        <form className="space-y-2" onSubmit={changePwd}>
          <input className="w-full rounded border-dark-500 bg-dark-800" type="password" placeholder="Current password" onChange={(e) => setPwd((s) => ({ ...s, currentPassword: e.target.value }))} />
          <input className="w-full rounded border-dark-500 bg-dark-800" type="password" placeholder="New password" onChange={(e) => setPwd((s) => ({ ...s, newPassword: e.target.value }))} />
          <Button size="sm">Update password</Button>
        </form>
      </Card>
    </div>
  );
}
