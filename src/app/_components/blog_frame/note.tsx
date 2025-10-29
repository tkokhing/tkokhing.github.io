export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="note py-0.5 ">
      <div className="text-center text-2xl font-bold mb-2">📝 Note:</div>
      <div className="text-justify text-green-900">{children}</div>
    </div>
  );
}