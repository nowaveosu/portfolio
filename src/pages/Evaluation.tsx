import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import yeom from "../images/yeom.jpg";
import joh from "../images/joh.png";
import kim from "../images/kim.png";
import "../GlobalStyle.css"

function Evaluation() {
    return (
      <div>
        <Link to="/education"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box-small">
          <div className="large-div">팀원평가</div>
          <div>
            <div className="weight-div"><img className="teampic" src={yeom} alt="yeom"></img>[FE] 염도경 </div>
            <div style={{marginBottom:"20px"}}>호준님은 팀원들의 의견을 조용히 듣다가 적절한 중재안을 잘 말해줍니다. 백앤드와 소통해야 할 때도 굉장히 능숙합니다.</div>
          </div>
          <div>
            <div className="weight-div"><img className="teampic" src={joh} alt="joh"></img>[BE] 조만기</div>
            <div style={{marginBottom:"20px"}}>모르는 분야를 같이 고민해주는 팀원이고, 어색할 때 부드럽게 분위기를 풀어주는 사람이다.</div>
          </div>
          <div>
            <div className="weight-div"><img className="teampic" src={kim} alt="kim"></img>[FE] 김성수</div>
            <div style={{marginBottom:"20px"}}>호준님은 코딩 능력이 뛰어나지만, 우쭐대지 않고 팀원을 존중하고 소통시에 상대방의 의견을 수용하려 노력한다. 그러나, 의견이 많아지면 약간 어지러워 한다.</div>
          </div>
          
        </div>
        <Link to="/experience"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Evaluation;

