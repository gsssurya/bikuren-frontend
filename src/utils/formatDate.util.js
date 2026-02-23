function formatDate(dateStr) {
  const date = new Date(dateStr);

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

export default formatDate;