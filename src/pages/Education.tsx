import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"

function Education() {
    return (
      <div>
        <Link to="/"><img src={prev_button} alt="prev button"/></Link>
        2
        <Link to="/evaluation"><img src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Education;