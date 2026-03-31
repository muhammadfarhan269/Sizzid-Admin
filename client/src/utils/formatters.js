export const formatNumber = (value) => new Intl.NumberFormat().format(value || 0);

export const formatDate = (value) =>
  value ? new Date(value).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) : "-";

export const formatPoints = (value) => `${formatNumber(value)} pts`;

export const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .map((x) => x[0]?.toUpperCase())
    .slice(0, 2)
    .join("") || "U";
