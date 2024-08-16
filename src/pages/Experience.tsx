import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Experience() {
    return (
      <div>
        <Link to="/evaluation"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box">
          <div className="large-div">경험</div>
          <div>
            <div>2023.06</div>
            <div className="weight-div">코드스테이츠 프론트엔드 개발자 부트캠프 수강</div>
            <div style={{marginBottom:"18px"}}>Javascript, HTML, CSS, React, Typescript, 웹개발 기초 수강</div>
          </div>
          <div>
            <div>2022.04</div>
            <div className="weight-div">김영철 교수님 연구실 TA 참여</div>
            <div>인공지능 수업의 학부연구생으로 매주 연구실 세미나 참석</div>
            <div style={{marginBottom:"18px"}}>Python을 사용한 과제 그래프 판별 코드 제작</div>
          </div>
          <div>
            <div>2021.09</div>
            <div className="weight-div">전남대 이노베이션 해커톤 특별상 수상</div>
            <div>flutter을 사용한 프론트엔드 개발 및 Google Map API 연동</div>
          </div>
        </div>
        <Link to="/projects"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Experience;