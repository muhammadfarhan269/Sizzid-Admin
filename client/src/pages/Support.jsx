import { useCallback, useEffect, useMemo, useState } from "react";
import { createTicket, getMyTickets, getTicket, sendMessage } from "../api/support";
import Modal from "../components/ui/Modal";

export default function Support() {
  const [tickets, setTickets] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ subject: "", message: "", priority: "MEDIUM" });

  const load = useCallback(() => getMyTickets().then((r) => { const list = r.data.data || []; setTickets(list); if (list[0] && !selectedId) setSelectedId(list[0].id); }), [selectedId]);
  useEffect(() => { load(); }, [load]);
  useEffect(() => { if (selectedId) getTicket(selectedId).then((r) => setDetail(r.data.data)); }, [selectedId]);
  const msgs = useMemo(() => detail?.messages || [], [detail]);

  const reply = async () => {
    if (!selectedId || !message.trim()) return;
    await sendMessage(selectedId, message.trim());
    setMessage("");
    const r = await getTicket(selectedId);
    setDetail(r.data.data);
  };

  const create = async () => {
    await createTicket(form.subject, form.message, form.priority);
    setOpen(false);
    setForm({ subject: "", message: "", priority: "MEDIUM" });
    load();
  };

  return (
    <div>
      <h1>Support</h1>
      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 12 }}>
        <div className="sizzld-card">
          {tickets.map((t) => (
            <button key={t.id} className="sizzld-card" style={{ width: "100%", textAlign: "left", marginBottom: 8, borderColor: selectedId === t.id ? "var(--accent-primary)" : "var(--border-color)" }} onClick={() => setSelectedId(t.id)}>
              <h4>{t.subject}</h4>
              <span className="sizzld-badge badge-purple">{t.status}</span>
            </button>
          ))}
        </div>
        <div className="sizzld-card" style={{ minHeight: 480, display: "flex", flexDirection: "column" }}>
          <h3>{detail?.subject || "Select a ticket"}</h3>
          <div style={{ flex: 1, marginTop: 10, overflow: "auto", display: "grid", gap: 8 }}>
            {msgs.map((m) => (
              <div key={m.id} style={{ justifySelf: m.isAdminReply ? "start" : "end", maxWidth: "75%", background: m.isAdminReply ? "var(--bg-card)" : "var(--accent-primary)", padding: 10, borderRadius: 10 }}>
                {m.message}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Reply..." />
            <button className="sizzld-btn sizzld-btn-primary" onClick={reply}>Send</button>
          </div>
        </div>
      </div>
      <button className="sizzld-btn sizzld-btn-primary" style={{ position: "fixed", right: 20, bottom: 90 }} onClick={() => setOpen(true)}>
        <i className="fa fa-plus" /> Ticket
      </button>
      <Modal open={open} title="Create ticket" onClose={() => setOpen(false)}>
        <input placeholder="Subject" value={form.subject} onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))} />
        <textarea placeholder="Message" value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} style={{ marginTop: 8 }} />
        <select value={form.priority} onChange={(e) => setForm((s) => ({ ...s, priority: e.target.value }))} style={{ marginTop: 8 }}>
          <option>LOW</option><option>MEDIUM</option><option>HIGH</option><option>URGENT</option>
        </select>
        <button className="sizzld-btn sizzld-btn-primary" style={{ marginTop: 8 }} onClick={create}>Create</button>
      </Modal>
    </div>
  );
}
