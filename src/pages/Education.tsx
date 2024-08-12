import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Education() {
    return (
      <div>
        <Link to="/"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        2
        <Link to="/evaluation"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Education;