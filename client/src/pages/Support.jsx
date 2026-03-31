import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createTicketApi, getMyTicketsApi, getTicketApi, sendTicketMessageApi } from "../api/support";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";

export default function Support() {
  const [selectedId, setSelectedId] = useState(null);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [newTicket, setNewTicket] = useState({ subject: "", message: "" });
  const { data: tickets = [], refetch } = useQuery({ queryKey: ["tickets"], queryFn: getMyTicketsApi });
  const { data: detail, refetch: refetchDetail } = useQuery({
    queryKey: ["ticket-detail", selectedId],
    queryFn: () => getTicketApi(selectedId),
    enabled: !!selectedId,
  });

  const send = async () => {
    if (!selectedId || !message.trim()) return;
    await sendTicketMessageApi(selectedId, { message });
    setMessage("");
    refetchDetail();
  };

  const create = async (e) => {
    e.preventDefault();
    await createTicketApi(newTicket);
    setIsOpen(false);
    setNewTicket({ subject: "", message: "" });
    refetch();
  };

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">My Tickets</h2>
          <Button size="sm" onClick={() => setIsOpen(true)}>
            New
          </Button>
        </div>
        <div className="space-y-2">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              className="w-full rounded bg-dark-800 p-2 text-left"
              onClick={() => setSelectedId(ticket.id)}
            >
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-xs text-slate-400">{ticket.status}</p>
            </button>
          ))}
        </div>
      </Card>
      <Card className="lg:col-span-2">
        {!detail ? (
          <EmptyState title="Select a ticket" />
        ) : (
          <div className="space-y-3">
            <h2 className="font-semibold">{detail.subject}</h2>
            <div className="max-h-96 space-y-2 overflow-auto">
              {(detail.messages || []).map((msg) => (
                <div key={msg.id} className="rounded bg-dark-800 p-2 text-sm">
                  <p className="text-xs text-slate-400">{msg.sender?.username || "User"}</p>
                  <p>{msg.message}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input className="w-full rounded border-dark-500 bg-dark-800" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Reply..." />
              <Button onClick={send}>Send</Button>
            </div>
          </div>
        )}
      </Card>
      <Modal isOpen={isOpen} title="Create ticket" onClose={() => setIsOpen(false)}>
        <form className="space-y-2" onSubmit={create}>
          <input className="w-full rounded border-dark-500 bg-dark-800" placeholder="Subject" value={newTicket.subject} onChange={(e) => setNewTicket((s) => ({ ...s, subject: e.target.value }))} />
          <textarea className="w-full rounded border-dark-500 bg-dark-800" placeholder="Message" value={newTicket.message} onChange={(e) => setNewTicket((s) => ({ ...s, message: e.target.value }))} />
          <Button fullWidth>Create</Button>
        </form>
      </Modal>
    </div>
  );
}
