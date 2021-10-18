import React from "react";

export default function Component({ value = "uknown" }) {
  return <div style={{ height: "100px", zIndex: 100 }}>{value}</div>;
}
