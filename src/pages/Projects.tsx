import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Projects() {
    return (
      <div>
        <Link to="/experience"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        5
        <Link to="/contact"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Projects;