import React from "react";

export default function PrimaryButton({ children, href }) {
  return (
    <a
      href={href}
      className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
      target="_blank"
    >
      {children}
    </a>
  );
}
