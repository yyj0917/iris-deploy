import { collection, doc, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";


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
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h4 {
        padding: 5px;
        margin: 5px;
        font-size: 50%;
        text-align: center;
    }
`;

export default function Company() {
    const [company, setCompany] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [companyExplain, setCompanyExplain] = useState("");
    const [companyKeyword, setCompanyKeyword] = useState("");

    useEffect(() => {
        fetchCompany();
    }, [])
    const fetchCompany = async() => {
        const companyListRef = collection(db, "companylist");
        const docSnap = await getDocs(companyListRef);
        let companyData = [];
        let count = 0;
        // let docId = "";
        docSnap.forEach((doc) => {
            companyData[count] = doc.data();
            count = count + 1;
            // docId = doc.id;
            
        })
        setCompany(companyData);
    }
    return (
        <>
            {
                company.map((a, i) => {
                    return <Job company={a} num={i} key={i}/>
                })
            }
        </>
    );
}
function Job(props) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/employeeList/" + props.company.profileKey);
    }
    return (
        <Container>
            <img  onClick={onClick} src="https://play-lh.googleusercontent.com/zkiNxSkrHN9Y25uxXpTSy49TX0Dpb1ql1vP_i55bm2QX_JtE3wDddjJVNEW62-KwNjzM=w240-h480-rw" alt="인바디"></img>
                <h3>
                    <h4>{props.company.name}</h4>
                    <h4>{props.company.explain}</h4>
                    <h4>{props.company.keyword}</h4>
                    {/* <h4>{props.company.profileKey}</h4> */}
                </h3>
        </Container>
    )
}