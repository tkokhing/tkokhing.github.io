export default function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="alert py-0.5 ">
      <div className="text-center text-2xl font-bold mb-2">⚠️ Alert:</div>
      <div className="text-justify text-amber-950">{children}</div>
    </div>
  );
}