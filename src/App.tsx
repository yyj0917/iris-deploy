import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";
import Employee from "./components/employee";
import EmployeeList from "./components/employeeList";
const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute>
      <Layout />
    </ProtectedRoute>),
      
    children: [
      {
        path: "",
        element: (
          <Home/>
        // 프로필 페이지와 홈페이지는 모두 protectedRoute의 children으로 보내준다.
        ),
      },
      {
        path: "/profile/:companyName",
        element: (
            <Profile />
          ),
      },
      {
        path: "/employeeList/:profileKey",
        element: (
          <EmployeeList/>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyels = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    @font-face {
      font-family: 'intelone-mono-font-family-regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/intelone-mono-font-family-regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
  }
    @font-face {
      font-family: 'SUITE-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
      font-weight: 400;
      font-style: normal;
}
  }
  body {
    background-color: #C3E7FA;
    color: white;
    font-size: 50px;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init =async() => {
    // wait for firebase
    await auth.authStateReady(); // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인 여부를 확인하는 동안 기다리겠다.
    setLoading(false);
  };
  useEffect(()=> {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyels />
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router} />}
    </Wrapper>
  )
}

export default App
