// For generating dynamic variables to enhance UI
export function monthdate(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}${pad(date.getMonth() + 1)}_${pad(date.getHours())}${pad(date.getMinutes())}`;
}
