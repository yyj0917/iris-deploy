import { addDoc, collection, getDocs, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { auth, db } from "../firebase";
import { useLocation, useParams } from "react-router";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;
const TextArea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: black;
  background-color: whitesmoke;
  width: 100%;
  height: 80%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`;
const Wrapper = styled.div`
    @font-face {
        font-family: 'SUITE-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    width: 70%;
    height: 70%;
    // border: 2px solid red;
    display: grid;
    div {
        border: 2px solid blue;
    }
    grid-template-columns: 30% 30% 40%;
    grid-template-rows: 45% 45% ;
    grid-gap: 10px;
    .grid-profile {
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            margin: 10px;
            border: 2px solid black;
            width:50%;
            border-radius: 50px;
        }
        h3 {
            margin: 10px;
            font-family: 'SUITE-Regular';
            font-size: 50%;
            color: black;
        }
        h4 {
            margin: 10px;
            font-family: 'SUITE-Regular';
            font-size: 40%;
        }
    }
    .grid-sidebar {
        grid-column-start: 2;
        grid-column-end: 4;
        font-family: 'SUITE-Regular';
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            margin: 5% 0 5%;
            margin-left: 3%;
            width: 100%;
            font-size: 60%;
        }
    }
    .grid-feedback {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .callAndMeet {
        font-family: 'SUITE-Regular';
        cursor: pointer;
        border: 2px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        h4 {
            margin: 10px;
            font-size: 30%;
        }
        svg {
            height: 30%;
            width: 30%;
            fill: #739BE1;
        }
    }
`;
const SubmitBtn = styled.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

export default function Profile() {
    const {state} = useLocation();
    const [isLoading, setLoading] = useState(false);
    const [counter, setCounter] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [visible, setVisible] = useState(false);
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value);
      };

    const onCount = () => {
        setCounter((prev) => prev+1);
        alert("아직 준비중인 기능입니다. 감사합니다.")
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setVisible(!visible);
        e.preventDefault();
        console.log(visible)
        const user = auth.currentUser;
        if (!user || isLoading || feedback === "" || feedback.length > 180) return;
        try {
          setLoading(true);
          await addDoc(collection(db, "feedback"), {
            feedback,
            createdAt: Date.now(),
            username: user.displayName || "Anonymous",
            userId: user.uid,
          });
          setFeedback("");
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
      
    return (
        <Wrapper>
            <div className="grid-profile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                <h3>{state[0]}</h3>
                <h4>{state[1]}</h4>
            </div>
            <div className="grid-sidebar">
                {visible 
                ? <>
                    <h2>Email : {state[2]}</h2>
                    <h2>Phone Number : 010 - 1234 - 5678 </h2></>  
                    : <BeforeFeedback/>}
                
                
            </div>
            <div className="grid-feedback">
                <Form onSubmit={onSubmit}>
                    <TextArea
                        required
                        rows={5}
                        maxLength={180}
                        onChange={onChange}
                        value={feedback}
                        placeholder="피드백을 남겨주세요."
                    />
                    <SubmitBtn
                        type="submit"
                        value={isLoading ? "Posting..." : "피드백 남기고 이메일 확인하기"}
                    />
                </Form>
            </div>
            <div className="callAndMeet" onClick={onCount}>
                <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
                <h4>(전화기능)</h4>
                <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <h4>(미팅기능)</h4>
                <h4>{counter}</h4>
            </div>
            
        </Wrapper>
    )
}
function BeforeFeedback() {
    return (
        
        <h2>피드백을 남겨주시면 정보확인이 가능합니다.</h2>
    )
}
function AfterFeedback(props) {
    return (
        <>
            <h2>Email : {props.state[2]}</h2>
            <h2>Phone Number : 010 - 1234 - 5678 </h2>
        </>
    )
}