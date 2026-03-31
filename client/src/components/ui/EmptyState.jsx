export default function EmptyState({ title = "Nothing here yet", text = "No records found." }) {
  return (
    <div className="empty-state sizzld-card">
      <i className="fa fa-inbox" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
