import { useQuery } from "@tanstack/react-query";
import { getMyVipTierApi, getVipBenefitsApi, getVipTiersApi } from "../api/vip";
import Card from "../components/ui/Card";
import { useAuth } from "../hooks/useAuth";

export default function VipTiers() {
  const { isAuthenticated } = useAuth();
  const { data: tiers = [] } = useQuery({ queryKey: ["vip-tiers"], queryFn: getVipTiersApi });
  const { data: benefits = {} } = useQuery({ queryKey: ["vip-benefits"], queryFn: getVipBenefitsApi });
  const { data: myTier } = useQuery({ queryKey: ["my-vip-tier"], queryFn: getMyVipTierApi, enabled: isAuthenticated });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">VIP Tiers</h1>
      {isAuthenticated && (
        <Card>
          Current tier: <span className="font-semibold">{myTier?.vipTier}</span> | Points to next:{" "}
          {myTier?.pointsToNextTier ?? "Max"}
        </Card>
      )}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <Card key={tier.tier} className={myTier?.vipTier === tier.tier ? "border-brand-primary" : ""}>
            <p className="text-lg font-bold">{tier.tier}</p>
            <p className="text-sm text-slate-300">
              {tier.minPoints} - {tier.maxPoints ?? "∞"} points
            </p>
            <p className="text-sm">Multiplier: {tier.multiplier}x</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300">
              {(benefits[tier.tier] || []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
