
"use client";

import { useState } from "react";
import { LayoutGrid, Main, NavbarContainer, SidebarContainer } from "globalStyles/gridtemplate";
import Navbar from "components/navbar/navbar";
import Sidebar from "components/sidebar/sidebar";


export default function ClientLayout({ children }) {
  
  const gradients = [
    "linear-gradient(to bottom, rgba(117,43,54,1) 0%, rgba(219,79,99,1) 31%, rgba(117,43,54,1) 88%)",
    "linear-gradient(to bottom, rgba(53, 45, 124, 1) 0%, rgba(80, 99, 219, 1) 31%, rgba(132, 142, 230, 1) 88%)",
    "linear-gradient(to bottom, rgba(31, 85, 70, 1) 0%, rgba(82, 195, 135, 1) 31%, rgba(31, 85, 70, 1) 88%)",
    "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(106, 106, 106, 1) 31%, rgba(180, 180, 180, 1) 88%)",

  ];

  
  const [bg, setBg] = useState(gradients[0]);

  
  const changeBackground = (newBg) => {
    setBg(newBg);
  };

  return (
    <LayoutGrid bg={bg}>
      <NavbarContainer>
        <Navbar />
      </NavbarContainer>
      <SidebarContainer>
        <Sidebar gradients={gradients} changeBackground={changeBackground} />
      </SidebarContainer>
      <Main>{children}</Main>
    </LayoutGrid>
  );
}

