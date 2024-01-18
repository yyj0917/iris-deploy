import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`

    display: flex;
    border: 2px solid blue;
    margin: 10px;
    width: 45%;
    height: 20%;
    font-size: 30px;
    img {
        flex: 1;
        width:30%;
        border-radius: 50px;
        cursor: pointer;
    }
    h3 {
        flex: 2;
    }
    h4 {
        padding: 5px;
        margin: 5px;
        font-size: 60%;
        text-align: center;
    }
    button {
        width: 50%;
        height: 30%;
        border-radius: 15px;
        font-family: 'intelone-mono-font-family-regular';
        text-align: center;

    }
`;

export default function Employee() {
    const navigate = useNavigate();


    const onClick = () => {
        navigate("/profile");
    }

    return (
        <>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                    <button onClick={onClick}>프로필열람</button>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
            <Container>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>
                    <h4>김삼순</h4>
                    <h4>yyj0917@yonsei.ac.kr</h4>
                </h3>
            </Container>
        </>
        

    )
}