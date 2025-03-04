'use client';

import { LinksBox, LinksContainer, LinksHeading, LinksGroup, GitHubIcon, SlackIcon, FigmaIcon, LinkedInIcon } from "./linksStyle";
import Link1 from "../../assets/links/1Link.svg"
import Link2 from "../../assets/links/2Link.svg"
import Link3 from "../../assets/links/3Link.svg"
import Link4 from "../../assets/links/4Link.svg"
import Image from "next/image";

const Links = () => {
  return (
    <LinksBox>
      <LinksContainer>
        <LinksHeading>Personal links</LinksHeading>
        <LinksGroup>

          <GitHubIcon>
            <a href="https://www.github.com">
              <Image alt="GitHub" src={Link1} />
            </a>
          </GitHubIcon>

          <SlackIcon>
            <a href="https://www.slack.com">
              <Image alt="Slack" src={Link2} />
            </a>
          </SlackIcon>

          <FigmaIcon>
            <a href="https://www.figma.com">
              <Image alt="Figma" src={Link3} />
            </a>
          </FigmaIcon>

          <LinkedInIcon>
            <a href="https://www.linkedin.com">
              <Image alt="LinkedIn" src={Link4} />
            </a>
          </LinkedInIcon>

        </LinksGroup>
      </LinksContainer>
    </LinksBox>
  );
};

export default Links;