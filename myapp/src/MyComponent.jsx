import { useState } from "react";

function MyComponent() {
  const [FirstName, setFirstName] = useState("일");
  return <h1>Hello {FirstName}</h1>;
}

export default MyComponent;
