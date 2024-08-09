import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"

function Experience() {
    return (
      <div>
        <Link to="/evaluation"><img src={prev_button} alt="prev button"/></Link>
        4
        <Link to="/projects"><img src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Experience;