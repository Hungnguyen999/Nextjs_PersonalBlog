import React from "react";

export default function Page({ children }) {
  return <main className="w-full max-w-4xl mx-auto py-16 h-full flex flex-col">{children}</main>;
}
