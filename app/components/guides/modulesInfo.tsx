import { Container, IconImage, ModulesText1, ModulesText2 } from "./style";

type Props = {
  ModuleTitle: string;
  GuidesNumber: number;
  GuidesImage: any;
};

const ModulesInfo = ({ ModuleTitle, GuidesNumber, GuidesImage }: Props) => {
  return (
    <>
      <Container>
        <IconImage alt="figma icon" src={GuidesImage} />
        <div>
          <ModulesText1>{ModuleTitle}</ModulesText1>
          <ModulesText2>{GuidesNumber} guides</ModulesText2>
        </div>
      </Container>
    </>
  );
};

export default ModulesInfo;
