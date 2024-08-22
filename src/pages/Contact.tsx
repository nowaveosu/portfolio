import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import "../GlobalStyle.css"


function Contact() {

    return (
      <div>
        <Link to="/projects"><img className="fixedPrev"src={prev_button} alt="prev_button"/></Link>
        <div className="content-box">
          <div style={{padding: 40}}>
            <div className="large-div">회사와 함께 성장하는 개발자가 되겠습니다. 연락주세요.</div>
            <div className="weight-div">Contact Number: <a href="tel://01073513804">010 7351 3804</a></div>
            <div className="weight-div">Mail: <a href="mailto:nowaveosu@gmail.com">nowaveosu@gmail.com</a></div>
            <div className="weight-div">Github: <a href="https://github.com/nowaveosu">github.com/nowaveosu</a></div>
            <div className="weight-div">blog: <a href="https://velog.io/@nowaveosu">velog.io/@nowaveosu</a></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;