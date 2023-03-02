import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardListStyled } from "./CardsList.styled";
import { Card } from "../Card/Card";
import { fetchUsers } from "redux/operations";



export const CardList = () => {    
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const isLoading = useSelector(state => state.isLoadingUsers);

    useEffect(() => {
        dispatch(fetchUsers());        
    }, [dispatch]);


    return (
        <>
            {isLoading ? "Loading cards..." : 
                <CardListStyled>
                    {users.length === 0 ? "There is no any card here..." : users.map(user => <Card key={user.id} user={user} />)}
                </CardListStyled>
            }
        </>        
    );
}