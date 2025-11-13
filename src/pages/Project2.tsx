import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Project1() {
    return (
      <div>
        <Link to="/project1"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box-small">
          <div className="large-div" style={{marginTop: 20, marginBottom: 30}}>프로젝트</div>
            <div className="project">
              <div>2025.05</div>
              <div><div className="large-div">[꼬들7] 어려운 우리말 퀴즈게임&nbsp;
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/nowaveosu/kordle7" target="_blank" rel="noreferrer">Github</a></button>
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://kordle7.site/" target="_blank" rel="noreferrer">Link</a></button></div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> Next.JS, TypeScript, TailwindCSS</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> 반응형디자인, 프론트엔드, 백앤드, 게임 알고리즘 구현을 1인 프로젝트로 진행했음</div>
              <div className="emp" style={{marginBottom:"-17px"}}>시연영상 📼</div>
              <video width="100%" controls>
                <source src={require("../videos/kordle.mp4")} type="video/mp4"/>
              </video>
              <div>게임룰, 반응형디자인, 키보드와 누르는 자판 , 프론트엔드와 네이버api응답 백앤드 모두 구현 </div>
              <div>매일마다 바뀌는 낱말게임 뉴욕타임즈의 워들을 참고한 꼬들의 어려운버전 제작, 방문자수 일간 200명</div>
            </div>
            <div className="project">
              <div>2024.07</div>
              <div><div className="large-div">[hyper-tictactoe] 독특한 룰을 여러개 적용한 1인개발 온라인 매칭 틱택토게임&nbsp;
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/nowaveosu/hyper-tictactoe" target="_blank" rel="noreferrer">Github</a></button>
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://www.hypertictactoe.store/" target="_blank" rel="noreferrer">Link</a></button></div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> Next.js, TypeScript, Tailwind CSS, Socket.io, Node.js</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> 로고, 반응형 디자인, 게임 룰 개발, 실시간 채팅 및 게임의 프론트엔드, 백엔드 구현, 디자인, 개발, 배포 모든 단계를 독자적으로 진행했음</div>
              <div className="emp" style={{marginBottom:"-17px"}}>시연영상 📼</div>
              <video width="100%" controls>
                <source src={require("../videos/matching.mp4")} type="video/mp4"/>
              </video>
              <div>사용자가 몇명있는지 확인할 수 있는 Room 구현, 대기화면 후 두명이 모두 접속하면 가위바위보로 선공을 정한 후 게임에 참가됨.</div>
              <video width="100%" controls>
                <source src={require("../videos/game.mp4")} type="video/mp4"/>
              </video>
              <div>Queue 자료구조를 사용한 가장 오래된 수가 사라지는 룰 + 시간제한을 둔 4x4 온라인 틱택토 게임 구현</div>
              <video width="100%" controls>
                <source src={require("../videos/chat.mp4")} type="video/mp4"/>
              </video>
              <div>Socket.io를 사용한 같은 Room의 참가자끼리 채팅기능 구현</div>
            </div>
        </div>
        <Link to="/project3"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Project1;


