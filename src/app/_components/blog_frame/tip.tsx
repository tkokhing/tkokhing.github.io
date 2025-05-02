export default function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="tip py-0.5 ">
      <div className="text-center text-2xl font-bold mb-2">💡 Tip:</div>
      <div className="text-justify">{children}</div>
    </div>
  );
}