"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import home from "../../../public/home2.svg";
import guides from "../../../public/guides.svg";
import calendar from "../../../public/calendar.svg";
import people from "../../../public/people.svg";
import resources from "../../../public/resources.svg";
import email from "../../../public/email.svg";
import arrow from "../../../public/arrow.svg";

import { ImageIcon, ArrowIcon } from "./style";

import homewhite from "../sidebar/icons/redIcons/homehover.svg";
import guideswhite from "../sidebar/icons/redIcons/guideshover.svg";
import calendarwhite from "../sidebar/icons/redIcons/calendarhover.svg";
import peoplewhite from "../sidebar/icons/redIcons/peoplehover.svg";
import resourceswhite from "../sidebar/icons/redIcons/resourceshover.svg";
import emailwhite from "../sidebar/icons/redIcons/emailhover.svg";

import colorize from "../../../public/colorize.png";

const ColorizeButton = styled(Image)`
  cursor: pointer;
  position: absolute;
  bottom: 80px;
  left: 30px;
`;

interface SidebarProps {
  gradients: string[];
  changeBackground: (newBg: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ gradients, changeBackground }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleColorizeClick = () => {
    const newIndex = (currentIndex + 1) % gradients.length;
    setCurrentIndex(newIndex);
    changeBackground(gradients[newIndex]);
    console.log("Background changed to:", gradients[newIndex]);
  };

  return (
    <>
      {!openModal ? (
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            paddingTop: "40px",
          }}
        >
          <ImageIcon src={home} alt="home" />
          <ImageIcon src={guides} alt="guides" />
          <ImageIcon src={calendar} alt="calendar" />
          <ImageIcon src={people} alt="people" />
          <ImageIcon src={resources} alt="resources" />
          <ImageIcon src={email} alt="email" />

          <ArrowIcon
            onClick={() => setOpenModal(true)}
            src={arrow}
            alt="Arrow"
            width={24}
            height={24}
          />
        </div>
      ) : (
        <div style={{ backgroundColor: "white", position: "relative" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              alignItems: "center",
              gap: "20px",
              position: "absolute",
              left: "30px",
              top: "30px",
              borderRadius: "8px",
              padding: "80px 61px",
            }}
          >
            <Image src={homewhite} alt="home" />
            <Image src={guideswhite} alt="guides" />
            <Image src={calendarwhite} alt="calendar" />
            <Image src={peoplewhite} alt="people" />
            <Image src={resourceswhite} alt="resources" />
            <Image src={emailwhite} alt="email" />

            <ArrowIcon
              onClick={() => setOpenModal(false)}
              style={{ top: "40px", left: "355px", rotate: "180deg" }}
              src={arrow}
              alt="Arrow"
              width={24}
              height={24}
            />
          </div>
        </div>
      )}

      <Image
        src={colorize}
        alt="Colorize"
        width={90}
        height={90}
        style={{
          position: "absolute",
          bottom: "90px",
          left: "20px",
          cursor: "pointer",
        }}
        onClick={handleColorizeClick}
      />
    </>
  );
};

export default Sidebar;
