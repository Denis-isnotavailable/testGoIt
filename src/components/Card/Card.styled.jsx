import styled from "styled-components";

import avatar from "../../images/avatar.png";
import decorations from "../../images/decorations.png";
import ellipse from "../../images/ellipse.png";

export const CardStyled = styled.li`
    position: relative;

    width: 380px;
    height: 440px;    
    padding-top: 20px;

    text-align: center;

    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    ul {
        margin-bottom: 26px;

        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        text-transform: uppercase;       

        color: #EBD8FF;
    }

    li:first-child {
        margin-bottom: 16px;
    }   

    ::before {
        content: '';
        position: absolute;
        top: 28px;
        left: 36px;

        width: 308px;
        height: 168px;

        background-color: transparent;
        background-image: url(${decorations});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    ::after {
        content: '';
        position: absolute;
        bottom: 238px;
        left: 0;
        width: 100%;
        height: 8px;        
        background-color: #EBD8FF;       
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`;

export const LogoThumbStyled = styled.div`    
    margin-left: 20px;
`;

export const DecorationsStyled = styled.div`
    position: absolute;
    top: 28px;
    left: 36px;

    width: 308px;
    height: 168px;

    background-image: url(${decorations});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const AvatarThumbStyled = styled.div`
    position: relative;
    z-index: 1;
    width: 80px;
    height: 80px;
    margin-top: 136px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 26px;
    border-radius: 50%;

    background-image: url(${avatar});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: -5px;
        width: 90px;
        height: 90px;
        background-image: url(${ellipse});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;        
    }
`;

export const ButtonStyled = styled.button`
    width: 196px;
    height: 50px;
    padding: 14px 28px;
    margin-bottom: 36px;

    background-color: ${p => p.isFollowing ? '#5CD3A8' : '#EBD8FF'};
   
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;

    text-transform: uppercase;

    color: #373737;

    cursor: pointer;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        transform: scale(1.04);        
    }
`;