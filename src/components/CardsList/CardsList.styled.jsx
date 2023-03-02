import styled from "styled-components";

export const CardListStyled = styled.ul`    

    display: flex;
    flex-wrap: wrap;    
    align-content: flex-start;
    gap: 20px;
    max-width: 380px;
    margin: 40px auto;

    @media (min-width: 780px) {        
        max-width: 780px;  
    }

    @media (min-width: 1180px) {
        max-width: 1180px;
    }
`;