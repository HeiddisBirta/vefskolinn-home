"use client";

import {
  BoxGroups,
  GroupsContainer,
  GroupsHeading,
  Container,
  Wrap1,
  Wrap2,
  Wrap3,
  Wrap4,
  ImgGroup1,
  ImgGroup2,
  ImgGroup3,
  ImgGroup4,
  TextGroup1,
  TextGroup2,
  TextGroup3,
  TextGroup4,
} from "./groupsStyle";
import Group1 from "../../assets/avatars/1group.svg";
import Group2 from "../../assets/avatars/2group.svg";
import Group3 from "../../assets/avatars/3group.svg";
import Group4 from "../../assets/avatars/4group.svg";
import Image from "next/image";

const Groups = () => {
  return (
    <BoxGroups>
      <GroupsContainer>
        <GroupsHeading>Groups </GroupsHeading>
        <Container>
          <Wrap1>
            <ImgGroup1>
              <Image alt="Group1" src={Group1} />
            </ImgGroup1>
            <TextGroup1>Module 7 - group project</TextGroup1>
          </Wrap1>

          <Wrap2>
            <ImgGroup2>
              <Image alt="Group2" src={Group2} />
            </ImgGroup2>
            <TextGroup2>Module 2 - group project</TextGroup2>
          </Wrap2>

          <Wrap3>
            <ImgGroup3>
              <Image alt="Group3" src={Group3} />
            </ImgGroup3>
            <TextGroup3>Group 3 - design thinking</TextGroup3>
          </Wrap3>

          <Wrap4>
            <ImgGroup4>
              <Image alt="Group4" src={Group4} />
            </ImgGroup4>
            <TextGroup4>Groups 4 - react native project</TextGroup4>
          </Wrap4>
        </Container>
      </GroupsContainer>
    </BoxGroups>
  );
};

export default Groups;
