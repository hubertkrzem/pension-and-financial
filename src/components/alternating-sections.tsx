import React from "react";

const COLORS = ["bg-white", "bg-gray-50"];

export default function AlternatingSections({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children).filter(Boolean);
  const count = childArray.length;

  return (
    <>
      {childArray.map((child, i) => {
        const posFromBottom = count - 1 - i;
        const bg = COLORS[posFromBottom % 2];
        return (
          <div key={i} className={bg}>
            {child}
          </div>
        );
      })}
    </>
  );
}
