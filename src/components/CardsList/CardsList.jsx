import { useEffect, useState } from "react";

import { getUsers } from "utils/getUsers";
import { CardListStyled } from "./CardsList.styled";
import { Card } from "../Card/Card";



export const CardList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {        
        const getAllUsers = async () => {
            const data = await getUsers();
            setUsers(data);            
        }
        getAllUsers();        
        
    }, []);


    return (
        <CardListStyled>
            {users.length === 0 ? "There is no any card here..." : users.map(user => <Card key={user.id} user={user} />)}
        </CardListStyled>
    );
}