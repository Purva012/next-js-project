import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Dashboard layout</p>
      {children}
    </div>
  );
}
