import { NavLink } from "react-router-dom";
import VipBadge from "../vip/VipBadge";
import { formatPoints } from "../../utils/formatters";

const links = [
  ["Home", "/home"],
  ["Games", "/games"],
  ["Leaderboard", "/leaderboard"],
  ["Rewards", "/rewards"],
  ["VIP", "/vip"],
  ["Support", "/support"],
  ["Profile", "/profile"],
];

export default function Sidebar({ user }) {
  return (
    <aside className="hidden w-64 border-r border-dark-600 bg-dark-800 p-4 lg:block">
      <p className="text-xl font-extrabold text-brand-primary">SIZZLD</p>
      <nav className="mt-6 space-y-1">
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm ${isActive ? "bg-brand-primary text-white" : "text-slate-300 hover:bg-dark-700"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10 rounded-lg border border-dark-600 bg-dark-700 p-3 text-sm">
        <p className="text-slate-400">Points Balance</p>
        <p className="font-semibold">{formatPoints(user?.totalPoints || 0)}</p>
        <div className="mt-2">
          <VipBadge tier={user?.vipTier} />
        </div>
      </div>
    </aside>
  );
}
