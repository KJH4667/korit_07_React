import { useState } from "react";

function MyForm3() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // form에서 쓸거라 handleSubmit부터 작성하겠습니다.
  const handleSubmit = (event) => {
    alert(`'Hello, ${user.firstName} ${user.lastName}'`);
    event.preventDefault();
  };

  // 자 근데 form 태그 썼고 내부에 input창으로 입력 받을거니까 onChange를 작성하게 될겁니다.
  // 근데 여러 개의 input태그 내에 onShange(event => setUser(event.target.value))를 field 개수대로 쓸 필요는 없을것 같으니까.

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: [event.target.value] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>firstName </label>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={user.firstName}
      />{" "}
      <input type="submit" value="클릭하세요 !" /> <br />
      <label>lastName </label>
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={user.firstName}
      />{" "}
      <input type="submit" value="클릭하세요 !" /> <br />
      <label>email </label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={user.firstName}
      />
      <input type="submit" value="e !" />
    </form>
  );
}

export default MyForm3;
