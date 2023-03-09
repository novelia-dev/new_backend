import React,{useState} from 'react'

function success(){
    alert('회원가입이 완료되었습니다.');
}

function Button(){
    //선호장르
    let data=["선호장르","선호장르","선호장르","선호장르","선호장르","선호장르"];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (btn) => {
        setBtnActive((prev) => {
          return btn.target.value;
        });
      };
    //선호태그
    let data1=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tagActive, setTagActive] = useState("");
    const toggleActive1 = (tag) => {
        setTagActive((prev) => {
          return tag.target.value;
        });
      };
    let data2=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tag1Active, setTag1Active] = useState("");
    const toggleActive2 = (tag) => {
          setTag1Active((prev) => {
            return tag.target.value;
          });
        };
    let data3=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tag2Active, setTag2Active] = useState("");
    const toggleActive3 = (tag) => {
        setTag2Active((prev) => {
          return tag.target.value;
        });
      };

    //금지태그
    let data4=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forbActive, setForbActive] = useState("");
    const toggleActive4 = (forb) => {
        setForbActive((prev) => {
          return forb.target.value;
        });
      };
    
    let data5=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forb1Active, setForb1Active] = useState("");
    const toggleActive5 = (forb) => {
          setForb1Active((prev) => {
            return forb.target.value;
          });
        };
    let data6=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forb2Active, setForb2Active] = useState("");
    const toggleActive6 = (forb) => {
        setForb2Active((prev) => {
          return forb.target.value;
        });
      };

    return(
        <div>
        <div>
                <h5 style={{width:"59px",height:"19px"}}>선호장르</h5>
            </div>
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
            <div>
                <hr />
                <h5>선호태그</h5>
            </div>
            <div>
            <table>
    <tr>
        {data1.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tagActive ? " active" : "")}
              onClick={toggleActive1}
            >
              {item}
            </button>
          </>
        );
      })}</tr>
      <tr>
        {data2.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tag1Active ? " active" : "")}
              onClick={toggleActive2}
            >
              {item}
            </button>
          </>
        );
      })}
      </tr> 
      <tr>
      {data3.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tag2Active ? " active" : "")}
              onClick={toggleActive3}
            >
              {item}
            </button>
          </>
        );
      })}

      </tr>
            </table>
            </div>
            <div>
                <hr />
                <h5>금지태그</h5>
            </div>
            <div>
            <table>
        <tr>
        {data4.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forbActive ? " active" : "")}
              onClick={toggleActive4}
            >
              {item}
            </button>
          </>
        );
      })}
        </tr>
        <tr>
        {data5.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forb1Active ? " active" : "")}
              onClick={toggleActive5}
            >
              {item}
            </button>
          </>
        );
      })}
        </tr>
      <tr>
      {data6.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forb2Active ? " active" : "")}
              onClick={toggleActive6}
            >
              {item}
            </button>
          </>
        );
      })}
      </tr>
    </table>
            </div>
            </div>
    )
}



function MobileRegisterPage2(){
    return(
        <div>
            <hr />
            <div>
            
            </div>
            <hr />
            <div>
              <label>닉네임</label><input type="text" placeholder="플레이스 홀더"/> <button>중복확인</button>
            </div>
            <div>
                <select className="성별">
                    <option value="none" default disabled>성별(남/여)</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                </select>
            </div>
            <div>
                <select className="나이">
                    <option value="none" default disabled>나이대</option>
                    <option value="10대">10대</option>
                    <option value="20대">20대</option>
                    <option value="30대">30대</option>
                    <option value="40대">40대</option>
                    <option value="50대 이상">50대 이상</option>
                </select>
            </div>
            <hr />
            <div>
                <label>이메일</label><input type="email" placeholder="본인인증용 이메일"/> <button>코드받기</button>
            </div>
            <div>
                <label>인증코드</label><input type="text" placeholder="메일로 받으신 코드를 입력하세요" /> <button>인증하기</button>
            </div>
            <hr />
            <div>
                <Button />
            </div>
            <hr />

            <button onClick={success}>입력완료</button>
            <hr />
        </div>
    )
}

export default MobileRegisterPage2;