import { useState } from "react";

function MyForm4() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  // 근데 잘 생각해보면 alert를 띄우는건 학습 상황이라서 그렇지 실제 얘가 하는 역할은 form 태그의 preventDefault()를 쓰기 위해
  const handleSubmit = (event) => {
    alert(`FirstName : ${firstName}, ${lastName}, ${email}`);
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>first Name: </label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <label>last Name:</label>
        <input type="text" onChange={(e) => setlastName(e.target.value)} />
        <br />
        <label>email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="Submit" value="제출" />
      </form>
    </>
  );
}

export default MyForm4;
