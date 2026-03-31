export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="sizzld-btn sizzld-btn-outline sizzld-btn-sm" style={{ position: "absolute", right: 12, top: 12 }} onClick={onClose}>
          <i className="fa fa-times" />
        </button>
        <h3 style={{ marginBottom: 16 }}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
