import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Home Layout</h1>
      {children}
    </div>
  );
}
