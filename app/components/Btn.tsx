"use client";

import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClick?: () => void;
}
export default function Btn({ title, onClick }: Props) {
  return (
    <button onClick={onClick} className="btn btn-primary mb-4">
      {title}
    </button>
  );
}
