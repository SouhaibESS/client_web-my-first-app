import React from "react";

export default function Component({ user = "uknown" }) {
  return <div style={{ height: "100px" }}>Hello {user}</div>;
}
