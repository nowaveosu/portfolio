import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import "../GlobalStyle.css"

function Contact() {
    return (
      <div>
        <Link to="/projects"><img className="fixedPrev" src={prev_button} alt="prev_button"/></Link>
        6
      </div>
    );
  }
  
  export default Contact;