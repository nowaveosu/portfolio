import { Link } from "react-router-dom";
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Introduction() {
  return (
    <div>
      1
      <Link to="/education"><img className="fixedNext" src={next_button} alt="next button"/></Link>
    </div>
  );
}

export default Introduction;
