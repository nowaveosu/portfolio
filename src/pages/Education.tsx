import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Education() {
    return (
      <div>
        <Link to="/introduction"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box">
          <ul>
            <li className="large-li">학업</li>
            <li>2017-2023</li>
            <li className="weight-li" style={{marginBottom:"5px"}}>전남대학교 컴퓨터정보통신공학과 전공</li>

            <li style={{marginBottom:"18px"}}>컴퓨터공학과 전공자로, 재학중 2번의 앱 서비스 개발 및 해커톤에 참여, 1회 수상
            4학년 학부연구생으로서 Python을 활용한 자동 채점 시스템 개발</li>

            <li className="large-li">자격증</li>
            <li>Toeic : 790</li>
            <li>정보처리기사: 필기합격 (2024년 3회차)</li>
          </ul>
        </div>

        <Link to="/evaluation"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Education;