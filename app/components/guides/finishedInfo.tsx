import { ProgressContainer, ProgressImage, ProgressImage2 } from "./style";
import Progressbar1 from "../../../app/assets/progressbar1.svg";
import Progressbar2 from "../../../app/assets/progressbar2.svg";
import Progressbar3 from "../../../app/assets/progressbar3.svg";
import Progressbar4 from "../../../app/assets/progressbar4.svg";
import Progressbar5 from "../../../app/assets/progressbar5.svg";
import Progressbar6 from "../../../app/assets/progressbar6.svg";

const FinishedInfo = () => {
  return (
    <>
      <ProgressContainer>
        <ProgressImage alt="progressimage1" src={Progressbar1} />
        <ProgressImage2 alt="progressimage2" src={Progressbar2} />
        <ProgressImage2 alt="progressimage3" src={Progressbar3} />
        <ProgressImage2 alt="progressimage4" src={Progressbar4} />
        <ProgressImage2 alt="progressimage5" src={Progressbar5} />
        <ProgressImage2 alt="progressimage6" src={Progressbar6} />
        <ProgressImage2 alt="progressimage7" src={Progressbar4} />
      </ProgressContainer>
    </>
  );
};

export default FinishedInfo;
