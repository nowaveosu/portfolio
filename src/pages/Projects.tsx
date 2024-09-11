import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Projects() {
    return (
      <div>
        <Link to="/experience"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box-small">
          <div className="large-div" style={{marginTop: 20, marginBottom: 30}}>프로젝트</div>
            <div className="project">
              <div>2024.07</div>
              <div><div className="large-div">[hyper-tictactoe] 독특한 룰을 여러개 적용한 1인개발 온라인 매칭 틱택토게임&nbsp;
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://github.com/nowaveosu/hyper-tictactoe" target="_blank" rel="noreferrer">Github</a></button>
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://www.hyper-tictactoe.com/" target="_blank" rel="noreferrer">Web</a></button></div><hr /><br /></div>
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
            <div className="project">
              <div>2023.07</div>
              <div><div className="large-div">[펫칭] 펫시터와 반려동물 주인 매칭 웹 서비스&nbsp;
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://github.com/Petching/Petching" target="_blank" rel="noreferrer">Github</a></button>
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://petching.net/" target="_blank" rel="noreferrer">Web</a></button></div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> React, TypeScript, Zustand, tailwind-CSS</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> Tailwind CSS를 활용한 돌봄리스트 페이지 및 글작성 페이지의 반응형 디자인 구현, 게시글 CRUD 구현, 카카오 주소 API를 이용한 검색 기능 구현</div>
              <div className="emp" style={{marginBottom:"-17px"}}>시연영상 📼</div>
              <video width="100%" controls>
                <source src={require("../videos/search.mp4")} type="video/mp4"/>
              </video>
              <div>지역, 날짜에 맞는 게시글 검색 </div>
              <video width="100%" controls>
                <source src={require("../videos/write_1.mp4")} type="video/mp4"/>
              </video>
              <div> 게시글 작성 </div>
              <video width="100%" controls>
                <source src={require("../videos/delete_1.mp4")} type="video/mp4"/>
              </video>
              <div> 게시글 수정, 삭제 </div>
            </div>
            <div className="project">
              <div>2023.05</div>
              <div><div className="large-div">[도와조약] 사용자 알러지 기반 알약 추천 웹 서비스&nbsp;
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://github.com/codestates-seb/seb43_main_009" target="_blank" rel="noreferrer">Github</a></button>
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://dowajoyak.store" target="_blank" rel="noreferrer">Web</a></button></div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> React, JavaScript, Redux, Styled-Component</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> 헤더, 로그인, 회원가입, OAuth, 맞춤추천 페이지 개발 및 구글검색 API 사용과 디자인 구현</div>
              <div className="emp" style={{marginBottom:"-17px"}}>시연영상 📼</div>
              <video width="100%" controls>
                <source src={require("../videos/OAuthLogin.mp4")} type="video/mp4"/>
              </video>
              <div>로그인, OAuth로그인 </div>
              <video width="100%" controls>
                <source src={require("../videos/Recommend_1.mp4")} type="video/mp4"/>
              </video>
              <div>맞춤추천 기능 </div>
            </div>
            <div className="project">
              <div>2021.10</div>
              <div><div className="large-div">[해커톤: 같이탈래] 같은 경로를 이용하는 택시 이용자를 매칭하는 어플리케이션&nbsp;
                <button><a style={{color: "rgb(126, 206, 249)"}} href="https://github.com/nowaveosu/gachiTarlae" target="_blank" rel="noreferrer">Github</a></button>
                </div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> flutter, firebase</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> flutter을 사용한 프론트엔드 개발 및 Google Map API 연동</div>
            </div>
        </div>
        <Link to="/contact"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Projects;


