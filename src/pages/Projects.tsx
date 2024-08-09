import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"

function Projects() {
    return (
      <div>
        <Link to="/experience"><img src={prev_button} alt="prev button"/></Link>
        5
        <Link to="/contact"><img src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Projects;