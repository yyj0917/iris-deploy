import { collection, getDocs, query, where, doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import Company from "./company";
import styled from "styled-components";

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

export default function CompanyList() {
        
        return (
            <Wrapper>
                <Company/>
            </Wrapper>
        )

    }
    
    
       //  console.log('\r\nUsing Query');
       //  result_2.forEach((e) => {
       //    console.log(e.id, ' : ', e.data());
       //  });


