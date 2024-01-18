import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
// import { useNavigate } from "react-router";

// const bucket = db.collection("companylist");
const Wrapper = styled.div`

    margin-bottom: 10px;
    width: 95%;
    height: 90%;
    border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    
`;
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
export default function EmployeeList() {
    const {profileKey} = useParams();
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        fetchEmployee();
    }, []);
    const fetchEmployee = async() => {
        const employeeListRef = collection(db, "companylist", profileKey, profileKey+"profile");
        const docSnap = await getDocs(employeeListRef);
        let employeeData = [];
        let count = 0;
        // let docId = "";
        docSnap.forEach((doc) => {
            employeeData[count] = doc.data();
            count = count + 1;
            // docId = doc.id;
            
        })
        setEmployee(employeeData);
    }
    return (
        <Wrapper>
            {
                employee.map((a, i) => {
                    return <Employee employee={a} num={i} key={i} />
                })
            }
        </Wrapper>
    );
        }
function Employee(props) {
    
    const navigate = useNavigate();
        const onClick = () => {
            navigate("/profile/" + props.employee.name, {
                state: [
                    props.employee.name,
                    props.employee.position,
                    props.employee.email,
                ]
            });
        }
        return (
            <Container>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjO61Ra4JQHkBvbNKNpaiKTUPuLhPmeg_cw&usqp=CAU" alt="직원"></img>
                    <h3>
                        <h4>{props.employee.name}</h4>
                        <h4>{props.employee.position}</h4>
                        <button onClick={onClick}>프로필열람</button>
    
                    </h3>
                </Container>
        )
}
