import { useState } from "react";

function MyForm() {
  // Form이 제출될 때 호출될 수 있도록 작성

  const [text, setText] = useState("");

  // input field에 입력한 것을 submit하면 날려보낼수 있도록 하는 함수를 작성
  // const handleChange = (event) => {
  //   setText(event.target.value);
  //   console.log(text);
  // };

  const handleSubmit = (event) => {
    alert(`'${text}, "라고 입력하셨습니다'`); // `''` 이렇게도 쓰인다. `` 안에 '' 이 들어간다
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setText(event.target.value)}value={text}/>
        <br />
        <br />
        <input type="submit" value="클릭하세요 !" />
      </form>
    </>
  );
}

export default MyForm;
