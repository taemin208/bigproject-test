export default function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border bg-white p-5 shadow-sm ${className}`.trim()}>
      {children}
    </div>
  );
}
