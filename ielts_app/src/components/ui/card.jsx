// src/components/ui/card.jsx
export function Card({ children, className }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 ${className || ""}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className || ""}`}>{children}</div>;
}
