import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Evaluation() {
    return (
      <div>
        <Link to="/education"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box">3</div>
        <Link to="/experience"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Evaluation;