"use client";

import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClick?: () => void;
  type?: string;
}
export default function Btn({ title, onClick, type }: Props) {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === "pri" ? "btn-primary" : ""} mb-4`}
    >
      {title}
    </button>
  );
}
