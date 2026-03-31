import { useQuery } from "@tanstack/react-query";
import { getNotificationsApi } from "../../api/notifications";
import { useAuth } from "../../hooks/useAuth";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const { data } = useQuery({
    queryKey: ["notifications", "count"],
    queryFn: () => getNotificationsApi({ limit: 1 }),
    enabled: !!user,
  });

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <div className="flex">
        <Sidebar user={user} />
        <div className="flex-1 pb-20 lg:pb-0">
          <Navbar user={user} unreadCount={data?.unreadCount || 0} onLogout={logout} />
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
