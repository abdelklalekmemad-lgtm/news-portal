const dateFormatter = new Intl.DateTimeFormat("ar-EG", {
  dateStyle: "medium",
});

export function formatDate(iso: string) {
  try {
    return dateFormatter.format(new Date(iso));
  } catch {
    return iso;
  }
}
