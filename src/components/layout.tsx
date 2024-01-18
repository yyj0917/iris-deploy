import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
// Outlet은 자식 요소들의 path로 가게끔한다...?
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

`;

const Menu = styled.div`
    h1 {
        margin-bottom: 100px;
    }
    margin: 20px;
    background-color: #D5C2EE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    gap: 20px;
    &.title-btn {
        flex: 1;
        font-family: 'intelone-mono-font-family-regular';
        font-size: 50px;
        font-weight: 1000;
    }
    &.company {
        flex: 3;
    }
    border: 2px solid black;
`;

const MenuItem = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    button {
        cursor: pointer;
        background-color: whitesmoke;
        width:80%;
        height:40px;
        border-radius: 40%;
    }
    svg {
        height: 50px;
        width: 50px;
    }
    &.log-out {
        cursor: pointer;

        height: 50px;
        width: 50px;
        border-color: tomato;
        svg {
            fill: tomato;
        }
    }
`;

export default function Layout() {
    const navigate = useNavigate();
    const onLogOut = async() => {
        const ok = confirm("Are you sure you want to log out?");
        if (ok) {
            await auth.signOut();
            navigate("/login");
        }
    }
    const onClickProfile = () => {
        navigate("/profile")
    }
    const onClickHome = () => {
        navigate("/");
    }
    const onClickBack = () => {
        navigate(-1);
    }
    return (
        <Wrapper>
            <Menu className="title-btn">
                <h1>IRIS</h1>
                    <MenuItem onClick={onClickProfile}>
                        <button>등록하기</button>
                    </MenuItem> 
                    <MenuItem onClick={onClickHome}>
                        <button>회사찾기</button>
                    </MenuItem>
                    <MenuItem onClick={onClickBack}>
                        <button>뒤로가기</button>
                    </MenuItem>
                
                <MenuItem onClick={onLogOut} className="log-out">
                    <svg dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" />
                        <path clipRule="evenodd" fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" />
                        </svg>
                </MenuItem>
            </Menu>
            <Menu className="company">
                <Outlet/>
            </Menu>
        </Wrapper>

    );
}