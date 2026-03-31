import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import VipBadge from "../vip/VipBadge";

export default function Navbar({ user, unreadCount = 0, onLogout }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-dark-600 bg-dark-800/90 p-3 backdrop-blur">
      <Link to="/home" className="font-extrabold text-brand-primary">
        SIZZLD
      </Link>
      <input
        className="hidden w-full max-w-sm rounded-lg border-dark-500 bg-dark-700 text-sm lg:block"
        placeholder="Search games..."
        readOnly
      />
      <div className="flex items-center gap-3">
        <Link to="/notifications" className="relative">
          <span>🔔</span>
          {unreadCount > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-brand-secondary px-1.5 text-xs">{unreadCount}</span>
          )}
        </Link>
        <Link to="/profile" className="flex items-center gap-2">
          <Avatar name={user?.username} src={user?.avatarUrl} />
          <div className="hidden sm:block">
            <p className="text-sm">{user?.username}</p>
            <VipBadge tier={user?.vipTier} />
          </div>
        </Link>
        <button onClick={onLogout} className="rounded bg-dark-700 px-2 py-1 text-xs">
          Logout
        </button>
      </div>
    </header>
  );
}
