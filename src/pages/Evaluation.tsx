import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"


function Evaluation() {
    return (
      <div>
        <Link to="/education"><img src={prev_button} alt="prev button"/></Link>
        3
        <Link to="/experience"><img src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Evaluation;