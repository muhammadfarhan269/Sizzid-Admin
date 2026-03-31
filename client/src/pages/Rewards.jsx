import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { listRewardsApi, myRedemptionsApi, redeemRewardApi } from "../api/rewards";
import { getMyPointsApi } from "../api/points";
import RewardCard from "../components/rewards/RewardCard";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import { formatPoints } from "../utils/formatters";

export default function Rewards() {
  const [selected, setSelected] = useState(null);
  const { data: rewards = [], refetch } = useQuery({ queryKey: ["rewards"], queryFn: listRewardsApi });
  const { data: redemptions = [], refetch: refetchRedemptions } = useQuery({ queryKey: ["my-redemptions"], queryFn: myRedemptionsApi });
  const { data: points } = useQuery({ queryKey: ["my-points"], queryFn: getMyPointsApi });

  const onRedeem = async () => {
    if (!selected) return;
    try {
      await redeemRewardApi(selected.id);
      toast.success("Reward redeemed");
      setSelected(null);
      refetch();
      refetchRedemptions();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Redeem failed");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rewards Store</h1>
      <Card>Balance: {formatPoints(points?.totalPoints || 0)}</Card>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <RewardCard key={reward.id} reward={reward} onRedeem={setSelected} />
        ))}
      </div>
      <section>
        <h2 className="mb-2 text-xl font-semibold">My Redemptions</h2>
        <div className="space-y-2">
          {redemptions.map((x) => (
            <Card key={x.id} className="flex items-center justify-between">
              <span>{x.reward?.title || "Reward"}</span>
              <Badge variant={x.status === "APPROVED" ? "success" : x.status === "REJECTED" ? "danger" : "info"}>{x.status}</Badge>
            </Card>
          ))}
        </div>
      </section>
      <Modal isOpen={!!selected} title="Confirm redemption" onClose={() => setSelected(null)}>
        <p className="text-sm text-slate-300">Redeem {selected?.title} for {formatPoints(selected?.pointsCost)}?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={() => setSelected(null)} className="rounded bg-dark-600 px-3 py-1">Cancel</button>
          <button onClick={onRedeem} className="rounded bg-brand-primary px-3 py-1">Confirm</button>
        </div>
      </Modal>
    </div>
  );
}
