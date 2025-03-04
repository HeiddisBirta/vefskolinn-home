import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ProgressContainer = styled(Container)`
  flex-direction: column;
  gap: 36px;
`;

export const IconImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const ProgressImage = styled(Image)``;
export const ProgressImage2 = styled(Image)``;

export const ModulesText1 = styled.h3`
  color: #7c2d38;
`;

export const ModulesText2 = styled.p`
  color: #c4abb0;
`;

export const GuidesContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0px 4px 32px -10px rgba(124, 68, 79, 0.5);
  /*margin: auto; // Explanation: Margin on the container itself, not what's inside*/
  padding-left: 20px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const GuidesBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  padding-right: 40px;
  border: 16px;
`;

export const GuideColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

export const GradesContainer = styled.div`
  color: #7c2d38;
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding-top: 10px;
`;
