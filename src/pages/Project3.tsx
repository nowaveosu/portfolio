import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"

function Project1() {
    return (
      <div>
        <Link to="/project2"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box-small">
          <div className="large-div" style={{marginTop: 20, marginBottom: 30}}>프로젝트</div>
            <div className="project">
              <div>2023.07</div>
              <div><div className="large-div">[펫칭] 펫시터와 반려동물 주인 매칭 웹 서비스&nbsp;
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/Petching/Petching" target="_blank" rel="noreferrer">Github</a></button>
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://petching.net/" target="_blank" rel="noreferrer">Link</a></button></div><hr /><br /></div>
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
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/codestates-seb/seb43_main_009" target="_blank" rel="noreferrer">Github</a></button>
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://dowajoyak.store" target="_blank" rel="noreferrer">Link</a></button></div><hr /><br /></div>
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
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/nowaveosu/gachiTarlae" target="_blank" rel="noreferrer">Github</a></button>
                </div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> flutter, firebase</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> flutter을 사용한 프론트엔드 개발 및 Google Map API 연동</div>
            </div>
        </div>
        <Link to="/contact"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Project1;


