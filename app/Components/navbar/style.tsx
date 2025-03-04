
'use client'
import { Pen, PenIcon } from "lucide-react";
import profilePic from "../../../public/profilepic.svg"
import pen from "../../../public/pen.svg"


import Image from "next/image";
import styled from "styled-components";

export const TopRightContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 20px; /* Space between text and profile picture */
  flex-direction: column;
  
`;

export const GreetingContainer = styled.div`
  display: flex;
  top: 85px;
  gap: 30px;
  position: absolute;
`;

export const GreetingsText = styled.h1`
color: var(--white, #FFF);
  text-align: right;
  font-family: Karma;
  font-size: 48px;
  font-style: normal;
  font-weight: 200;
  line-height: 118.826%;
  white-space: nowrap;
`

export const BoldText = styled.span`
  font-weight: 700; /*Bold weight*/
  line-height: 113.138%;
`;

export const ProfileImage = styled(Image).attrs({
  
  width: 160,
  height: 160,
  alt: "Profile Picture",
  

})`
  
  
`;



export const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    grid-area: navbar;
    
`

export const PenImage = styled(Image)`
position: absolute;
bottom: 20px;
right: 45px;
cursor: pointer;
`
;
