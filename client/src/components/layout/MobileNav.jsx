import { NavLink } from "react-router-dom";

const links = [
  ["🏠", "/home"],
  ["🎮", "/games"],
  ["🏆", "/leaderboard"],
  ["🎁", "/rewards"],
  ["👤", "/profile"],
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-dark-600 bg-dark-800 p-2 lg:hidden">
      <div className="flex items-center justify-around">
        {links.map(([icon, path]) => (
          <NavLink key={path} to={path} className={({ isActive }) => `${isActive ? "text-brand-primary" : "text-slate-300"} text-xl`}>
            {icon}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
