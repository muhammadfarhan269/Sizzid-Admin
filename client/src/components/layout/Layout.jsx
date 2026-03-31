import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getNotifications } from "../../api/notifications";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    getNotifications({ limit: 1 })
      .then((res) => setUnread(res.data.unreadCount || 0))
      .catch(() => setUnread(0));
  }, []);

  return (
    <div className="page-wrapper">
      <Sidebar user={user} unreadCount={unread} />
      <Navbar user={user} unreadCount={unread} onLogout={logout} />
      <main className="main-content">{children}</main>
      <div className="mobile-only">
        <MobileNav />
      </div>
    </div>
  );
}
