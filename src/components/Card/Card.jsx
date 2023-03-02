import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

import { AvatarThumbStyled, ButtonStyled, CardStyled, LogoThumbStyled } from "./Card.styled";
import logo from "../../images/logo.png";
import { changeFollowers } from "utils/getUiFollowers";
import { db } from "../../firebase/config";


export const Card = ({ user }) => {
    const [isFollowing, setIsFollowing] = useState(user.isFollowing);
    const [followers, setFollowers] = useState(user.followers);
    
    const changeFollowingStstus = async () => {
        const followingRef = doc(db, "users", user.id);    
        const followersData = isFollowing ? followers - 1 : followers + 1;

        await updateDoc(followingRef, {
            isFollowing: !isFollowing,
            followers: followersData
        });

        setIsFollowing(!isFollowing);
        setFollowers(followersData)
    }


    const { avatar, tweets } = user;
    
    return (
        <CardStyled>
            <LogoThumbStyled>
                <img src={logo} alt="logo" width={76} height={22} />
            </LogoThumbStyled>            

            <AvatarThumbStyled>
                {avatar && <img src={avatar} alt="avatar" width={80} height={80}/>}
            </AvatarThumbStyled>

            <ul>
                <li>{`${tweets} tweets`}</li>
                <li>{`${changeFollowers(followers)} Followers`}</li>
            </ul>

            <ButtonStyled type="button" isFollowing={isFollowing} onClick={changeFollowingStstus}>
                {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
            </ButtonStyled>
            
        </CardStyled>
    );
}