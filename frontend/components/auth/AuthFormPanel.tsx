
import type { ReactNode } from "react";

type AuthFormPanelProps = {
  children: ReactNode;
};

export default function AuthFormPanel({
  children,
}: AuthFormPanelProps) {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-5 py-10 sm:px-8 lg:w-1/2 lg:px-12 xl:px-20">
      <div className="w-full max-w-md">{children}</div>
    </section>
  );
}
