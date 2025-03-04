"use client";
import { useState } from "react";

import Image from "next/image";
import {
  BoldText,
  GreetingContainer,
  GreetingsText,
  Nav,
  PenImage,
  ProfileContainer,
  ProfileImage,
  TopRightContainer,
} from "./style";
import profilePic from "../../../public/User Picture.png";
import logo from "../../../public/logo.svg";
import cog from "../../../public/cog.svg";
import logout from "../../../public/logout.svg";
import pen from "../../../public/pen.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Image
          height={200}
          width={200}
          src={logo}
          alt="Logo"
          className="logo"
        ></Image>

        <ProfileContainer>
          <span></span>
          <TopRightContainer>
            <Image
              height={25}
              width={25}
              src={cog}
              alt="Settings"
              className="cog"
            ></Image>
            <Image
              height={25}
              width={25}
              src={logout}
              alt="Logout"
              className="logout"
            ></Image>
            <span></span>
          </TopRightContainer>
          <GreetingContainer>
            <GreetingsText>
              Hi <BoldText>Alice</BoldText>,<br />
              Nice to see you here!
            </GreetingsText>

            <div className="relative">
              <PenImage src={pen} width={30} height={30} alt="Pen Settings" />
              <ProfileImage
                src={profilePic}
                width={50}
                height={50}
                alt="Profile Pic"
              />
            </div>
            {/*<div style={{ position: "relative", width: "100px", height: "100px" }}>
  <ProfileImage src={profilePic} width={100} height={100} alt="Profile Pic" />
  <PenImage
    src={pen}
    width={30}
    height={30}
    alt="Pen Settings"
    style={{ position: "absolute", bottom: -50, right: -90 }}
  />
</div>*/}

            <span></span>
          </GreetingContainer>
        </ProfileContainer>
      </Nav>
    </>
  );
};

export default Navbar;
