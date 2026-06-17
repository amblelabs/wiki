import type { ReactNode } from "react";
import ConsentProvider from "./provider";

export function ConsentManager({ children }: { children: ReactNode }) {
  return <ConsentProvider>{children}</ConsentProvider>;
}
