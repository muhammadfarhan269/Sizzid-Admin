import { useQuery } from "@tanstack/react-query";
import { getNotificationsApi, markAllNotificationsReadApi, markNotificationReadApi } from "../api/notifications";
import NotificationItem from "../components/notifications/NotificationItem";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";

export default function Notifications() {
  const { data, refetch } = useQuery({ queryKey: ["notifications"], queryFn: () => getNotificationsApi({ page: 1, limit: 50 }) });
  const items = data?.items || [];

  const onRead = async (id) => {
    await markNotificationReadApi(id);
    refetch();
  };

  const onReadAll = async () => {
    await markAllNotificationsReadApi();
    refetch();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button size="sm" variant="ghost" onClick={onReadAll}>
          Mark all as read
        </Button>
      </div>
      <p className="text-sm text-slate-300">Unread: {data?.unreadCount || 0}</p>
      {!items.length ? (
        <EmptyState title="No notifications" />
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <NotificationItem key={item.id} item={item} onRead={onRead} />
          ))}
        </div>
      )}
    </div>
  );
}
