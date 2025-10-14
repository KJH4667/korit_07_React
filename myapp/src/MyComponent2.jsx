import { useState } from "react";
import "./App.css";

function MyComponent2() {
  const [name, setName] = useState({
    firstName: "John", // -> fristName이 key값 / "John" 이 Value
    lastName: "Doe",
  });

  return (
    <>
      <h2>
        Hello {name.firstName} {name.lastName}
      </h2>
    </>
  );
}

export default MyComponent2;
