import { Link } from "react-router-dom";
import prev_button from "../images/prev_button.png"
import next_button from "../images/next_button.png"
import "../GlobalStyle.css"
import { useEffect } from "react";

function Project1() {
    useEffect(() =>
    window.scrollTo(0, 0)
    , [])
    return (
      <div>
        <Link to="/experience"><img className="fixedPrev" src={prev_button} alt="prev button"/></Link>
        <div className="content-box-small">
          <div className="large-div" style={{marginTop: 20, marginBottom: 30}}>프로젝트</div>
          <div className="project">
              <div>2025.03</div>
              <div><div className="large-div">[가려움없는세상] 아토피 환자 정보공유 게시판&nbsp;
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://github.com/nowaveosu/muri-shop" target="_blank" rel="noreferrer">Github</a></button>
                <button style={{ backgroundColor: "lightblue", fontWeight: "bold" }}><a style={{ color: "black", textDecoration: "none" }} href="https://nomoreitch.store/" target="_blank" rel="noreferrer">Link</a></button></div><hr /><br /></div>
              <div style={{marginBottom:"7px"}}><span className="emp">기술 스택 :</span> Next.JS, Redux, MongoDB, TypeScript</div>
              <div style={{marginBottom:"7px"}}><span className="emp">담당기능 :</span> 반응형디자인, 프론트엔드, 게시판, 댓글, DB및 백앤드 구현 1인 프로젝트로 진행했음</div>
              <div className="emp" style={{marginBottom:"-17px"}}>시연영상 📼</div>
              <video width="100%" controls>
                <source src={require("../videos/lotion.mp4")} type="video/mp4"/>
              </video>
              <div>로그인, 제품DB구성, 좋아요, 댓글기능 구현 </div>
              <video width="100%" controls>
                <source src={require("../videos/board.mp4")} type="video/mp4"/>
              </video>
              <div>말머리를 정하고 게시판에 글을 자유롭게 올리고 회원/비회원 차이를 둠, 댓글기능 구현</div>
            </div>
        </div>
        <Link to="/project2"><img className="fixedNext" src={next_button} alt="next button"/></Link>
      </div>
    );
  }
  
  export default Project1;


