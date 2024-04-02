import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col py-10 border-b border-gray-500/30">
      {children}
    </section>
  );
};
