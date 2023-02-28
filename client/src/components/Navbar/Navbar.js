import React,{useState} from 'react';
import Novelist from '../Image/Navbar_logo.png';
import Bell from '../Image/bell.png';
import NewText from '../Image/pen.png';
import Mypage from '../Image/user.png';

import './Navbar.css';

function movetomypage(){
  window.location.href="/mypage";
}

function Navbar(){
    const Text = ()=> {

        return(
        <div>
           <table>
           <tr>
           <td><img className="Novelist" alt="Novelist" style={{width:"122.9px", height:"30px",marginTop:"30px",marginLeft:"225px"}}src={Novelist} /></td>
           <td><input type="text" placeholder="  #해쉬태그로 검색해보세요" style={{width: "588px",height: "30px", marginTop:"30px",marginLeft:"318.1px",backgroundColor:'#FFFFFF',borderRadius:"50px",}}></input></td>
           <td>
            <img className="Bell" alt="Bell" style={{width:"18px", height:"25px",marginTop:"30px",marginLeft:"324px"}}src={Bell} />
            <img className="NewText" alt="NewText" style={{width:"24px", height:"23px",marginTop:"30px",marginLeft:"363px"}}src={NewText}/>
            <div id="My">
              <nav id = "nav" style={{width:"30px"}}>
                 <img className="Mypage" alt="Mypage" style={{width:"24px", height:"23px",marginTop:"30px",marginLeft:"399px"}}src={Mypage} onClick={movetomypage}></img>
            <li id="dropDown">
              <h4>@@@님</h4>
              <h5>5000 point  포인트샵</h5>
              <h5>독자 페이지</h5>
              <h5>스크랩한 작품</h5>
              <h5>피드백 참여 작품</h5>
              <br />
              <h5>작가 페이지</h5>
              <h5>새글등록</h5>
              <h5>피드백 진행중인 작품</h5>
              <h5>피드백 완료된 작품</h5>
              <h5>쿠폰함</h5>
              <br />
              <h5>기본정보</h5>
              <h5>기본정보 및 선호/금지태그 수정</h5>
            </li>
            </nav>
            </div>
           </td>
           </tr>
           </table>
            
              <br/><br/>
          
        </div>
        )}
   
        return(
            <div>
                <Text />
                <Button/>
            </div>
        )
    
}


//npm install styled-component 해야됨
 function Button() {
    let data=["전체작품","객관식작","주관식작","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };
   

       
        return(
            <div style={{margintop:"113px",marginLeft:"389px"}}>
                 <table>
        {data.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
          </>
        );
      })}
                 </table>
    
            </div>
    
        ) 
}

 




export default Navbar;