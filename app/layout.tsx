import "globalStyles/globals.css";
import StyledComponentsRegistry from "utils/registry";

import {
  SidebarContainer,
} from "globalStyles/gridtemplate";
import ClientLayout from "./components/ClientLayout";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <StyledComponentsRegistry>
          <ClientLayout>{children} </ClientLayout>

          <SidebarContainer></SidebarContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
