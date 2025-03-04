import styled from "styled-components";
import Image from "next/image";
import home from "public/Vector.svg";

export const ImageIcon = styled(Image)`
  transform: translate(15%);
  height: 60px;
  width: 60px;
  border-radius: 8px;
`;

export const ArrowIcon = styled(ImageIcon)`
  position: absolute;
  top: 45px;
  left: 120px;
  cursor: pointer;

  /*transform: translate(220%, 15%);*/
  height: 44px;
  width: 44px;
`;
