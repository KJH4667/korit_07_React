// import React, { useState, ChangeEvent, FormEvent } from "react";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("이메일과 비밀번호를 모두 입력해주세요.");
//       return;
//     }

//     console.log("로그인 시도:", { email, password });
//     setError("");
//     alert("로그인 시도 완료!");
//   };

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2>로그인</h2>
//         {error && <p style={styles.error}>{error}</p>}
//         <input
//           type="email"
//           placeholder="이메일"
//           value={email}
//           onChange={handleEmailChange}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="비밀번호"
//           value={password}
//           onChange={handlePasswordChange}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           로그인
//         </button>
//       </form>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     background: "#f5f5f5",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     padding: "30px",
//     borderRadius: "8px",
//     background: "#fff",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     width: "300px",
//   },
//   input: {
//     marginBottom: "15px",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "4px",
//     border: "none",
//     background: "#4CAF50",
//     color: "#fff",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     marginBottom: "10px",
//   },
// };

// export default Login;

// import React, { useState } from "react";

// // 뉴스 타입 정의
// interface News {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
// }

// // 샘플 뉴스 데이터
// const sampleNews: News[] = [
//   {
//     id: 1,
//     title: "React 19 출시!",
//     content: "React 19 버전이 출시되었습니다. 새로운 기능과 최적화가 포함되어 있습니다.",
//     author: "홍길동",
//     date: "2025-10-30",
//   },
//   {
//     id: 2,
//     title: "TypeScript 인기 상승",
//     content: "최근 TypeScript 사용자가 급격히 증가하고 있습니다.",
//     author: "김철수",
//     date: "2025-10-29",
//   },
//   {
//     id: 3,
//     title: "웹 개발 트렌드",
//     content: "2025년 웹 개발 트렌드는 컴포넌트 재사용성과 성능 최적화에 집중하고 있습니다.",
//     author: "이영희",
//     date: "2025-10-28",
//   },
// ];

// const NewsPage: React.FC = () => {
//   const [newsList, setNewsList] = useState<News[]>(sampleNews);

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>오늘의 뉴스</h1>
//       <div style={styles.newsList}>
//         {newsList.map((news) => (
//           <div key={news.id} style={styles.card}>
//             <h2 style={styles.title}>{news.title}</h2>
//             <p style={styles.content}>{news.content}</p>
//             <div style={styles.footer}>
//               <span>작성자: {news.author}</span>
//               <span>{news.date}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // 간단한 inline 스타일
// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     maxWidth: "800px",
//     margin: "0 auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "30px",
//   },
//   newsList: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//   },
//   card: {
//     padding: "20px",
//     borderRadius: "8px",
//     background: "#f9f9f9",
//     boxShadow: "0 0 5px rgba(0,0,0,0.1)",
//   },
//   title: {
//     margin: "0 0 10px 0",
//   },
//   content: {
//     margin: "0 0 15px 0",
//   },
//   footer: {
//     display: "flex",
//     justifyContent: "space-between",
//     fontSize: "14px",
//     color: "#555",
//   },
// };

// export default NewsPage;

import { colors } from "@mui/material"; /* 이 문장은 “@mui/material이라는 외부 라이브러리에서 colors라는 기능(모듈)을 불러온다”는 뜻이에요. */
import React, { useState } from "react"; /* import란?

import는 자바스크립트(ES6) 의 문법으로,
다른 파일이나 외부 라이브러리에서 함수, 변수, 객체, 클래스 등을 가져올 때 사용합니다.  @mui/material은 뭐냐?

이건 Material-UI (MUI) 라는 오픈소스 리액트 UI 라이브러리입니다.

Google의 Material Design 시스템을 React에서 쉽게 쓸 수 있게 만든 프레임워크예요.

@mui/material 패키지 안에는
버튼, 카드, 입력창, 색상 팔레트 등 UI 컴포넌트와 유틸리티들이 들어 있어요.*/

interface News { /* 배열 안의 객체가 id, title, content, author, date 중 하나라도 빠지면 TypeScript가 에러를 내줍니다. 인터페이스를 미리 써놔야 오류를 방지한다. */
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const sampleNews: News[] = [
  { id: 1, title: "React 19 출시!", content: "React 19 버전이 출시되었습니다.", author: "홍길동", date: "2025-10-30" },
  { id: 2, title: "TypeScript 인기 상승", content: "TypeScript 사용자가 급격히 증가하고 있습니다.", author: "김철수", date: "2025-10-29" },
  { id: 3, title: "웹 개발 트렌드", content: "2025년 웹 개발 트렌드는 성능 최적화에 집중합니다.", author: "이영희", date: "2025-10-28" },
]; /* 만약 여기서 Key값중 하나라도 빠지면 오류가 발생한다. 예를들어 title 을 제외해버리면 바로 오류가 난다. 하나라도 주석처리 하니까 밑에 빨간줄 뜬다. */

const NewsPage: React.FC = () => {
  const [newsList] = useState<News[]>(sampleNews); /* “newsList라는 변수를 만들고, 그 안에 sampleNews 데이터를 기본값으로 저장해둬.”
“그리고 React가 이 값을 상태(state)로 관리하게 해줘.” 라는 의미다.  */

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>오늘의 뉴스</h1>
      <div style={styles.newsList}>
        {/* <div style={{ backgroundColor: "red" }}>글자색</div>/ */} 
         {/* 위에서 작성한 방식은 미리 저장해둔다. 백그라운드 컬러 적을때 마지막 color가 아닌 Color로 카멜케이스로 적어야한다. */}
         {/* <div style={{ color: "red" }}>글자색</div> */}
          {/* 하지만 위의 컬러는 또 소문자 이다.  */}
        {newsList.map((news) => (  /* 이 부분은 React에서 리스트(배열) 를 화면에 “반복해서 렌더링”할 때 쓰는 아주 핵심 문법이다. newsList.map((news)   .map은 배열을 하나씩 꺼내서 계산한다 */
          <div key={news.id} style={styles.card}>
            <h2 style={styles.title}>{news.title}</h2>
            <p style={styles.content}>{news.content}</p>
            <div style={styles.footer}>
              <span style={styles.author}>작성자: {news.author}</span>
              <span style={styles.date}>{news.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f0f2f5",
  },
  header: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "40px",
    color: "#333",
    fontWeight: 700,
  },
  newsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "12px",
    color: "#222",
  },
  content: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#888",
  },
  author: { fontStyle: "italic" },
  date: { fontWeight: 500 },
};

// Hover 효과 추가
styles.card = { ...styles.card, ":hover": { transform: "scale(1.03)", boxShadow: "0 8px 20px rgba(0,0,0,0.15)" } };

/*Hover 효과란?

**“마우스를 올렸을 때 나타나는 효과”**를 의미해요.

예를 들어 버튼이나 카드 위에 마우스를 올리면 색이 바뀌거나 그림자가 생기거나, 크기가 살짝 커지는 효과 같은 것들이 모두 hover 효과입니다.

.card {
  background-color: white;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.03); /* 살짝 커짐 */
  // box-shadow: 0 8px 20px rgba(0,0,0,0.15); /* 그림자 강화 */
// }


export default NewsPage;

