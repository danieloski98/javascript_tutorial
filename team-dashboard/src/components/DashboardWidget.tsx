import React from "react";

export default function DashboardWidget({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      {children}
    </div>
  );
}

