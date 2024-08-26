import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import about from "../images/about.jpg"
import "../GlobalStyle.css"

function Introduction() {
  return (
    <div>
      <Link to="/"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
      <div className="content-box-small">
        <div className="about-box">
          <img className="about" src={about} alt ="프사"></img>
          <ul className="about-ul">
                <li className="large-div">소개</li>
                <li><span className="weight-div">Name:</span> <a href="tel://01073513804">노호준</a></li>
                <li><span className="weight-div">Birth:</span> <a href="tel://01073513804">98년 8월 24일</a></li>
                <li><span className="weight-div">Email:</span> <a href="mailto:nowaveosu@gmail.com">nowaveosu@gmail.com</a></li>
                <li><span className="weight-div">Phone: </span> <a href="tel://01073513804">010-7351-3804</a></li>
                <li><span className="weight-div">github:</span> <a href="https://github.com/nowaveosu">github.com/nowaveosu</a></li>
                <li><span className="weight-div">blog: </span> <a href="https://velog.io/@nowaveosu">velog.io/@nowaveosu</a></li>
                <li><span className="weight-div">다짐: </span> 명확한 커뮤니케이션을 통해 소통하고, 긍정적인 마음으로 개발에 임하겠습니다. 현재 프론트엔드 개발자로 구직중입니다.</li>
          </ul>
        </div>
      </div>
      <Link to="/education"><img className="fixedNext" src={next_button} alt="next button"/></Link>
    </div>
  );
}

export default Introduction;
