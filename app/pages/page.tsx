"use server";

import "globalStyles/globals.css";
import Countdown from "components/countdown/countdown";
import {
  BackgroundDiv,
  MainContainer,
  NewSidebarContainer,
  RightSideMain,
} from "./style";
import Groups from "components/groups/groupsLayout";
import Links from "components/links/linksLayout";
import Notes from "components/notes/noteslayout";
import CalendarComponent from "components/calendar/calendar";

import Guides from "components/guides/guidesLayout";
import { getGuides } from "serverActions/getGuides";
import { extendGuides } from "utils/guideUtils";

  const GuidesWidget = async() => {
    const userId ='67b48a1159ab390636d322d9'

    const fetchedGuides =(await getGuides(userId)) || [];
    if(fetchedGuides.length<1) throw new Error("No guides found.")
    const extendedGuides = await extendGuides(
    JSON.parse(JSON.stringify(fetchedGuides))
  );

    return (
    <>
      <BackgroundDiv>
        <MainContainer>
          <NewSidebarContainer>
            <Guides data={extendedGuides}></Guides>
            <Countdown></Countdown>
            <Notes></Notes>
          </NewSidebarContainer>
          <RightSideMain>
            <Links></Links>

            <Groups></Groups>

            <CalendarComponent></CalendarComponent>
          </RightSideMain>
        </MainContainer>
      </BackgroundDiv>
    </>
  );
};

export default GuidesWidget;

// const GuidesWidget = async ()=> {
//   const userId ='67b48a1159ab390636d322d9'

//   const fetchedGuides =(await getGuides(userId)) || [];
//   if(fetchedGuides.length<1) throw new Error("No guides found")
//   const extendedGuides = await extendGuides(
//     JSON.parse(JSON.stringify(fetchedGuides))
//   );
//   return (
//     <div>
//       <Guides data={extendedGuides}></Guides>
//     </div>
//   );
// };

// export default GuidesWidget;

// const Landingpage = () => {
//   return (
//     <>
//       <BackgroundDiv>
//         <MainContainer>
//           <NewSidebarContainer>
//             <Countdown></Countdown>
//             <Notes></Notes>
//           </NewSidebarContainer>
//           <RightSideMain>
//             <Links></Links>

//             <Groups></Groups>

//             <CalendarComponent></CalendarComponent>
//           </RightSideMain>
//         </MainContainer>
//       </BackgroundDiv>
//     </>
//   );
// };

/*export default Landingpage;*/
