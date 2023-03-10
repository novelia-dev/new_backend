import React,{useState} from 'react';
import MobileNavbar from "../../Navbar/MobileNavbar";
import MobileFooter from "../../Footer/MobileFooter";
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


function MobileMypageInfo(){
    return(
        <div>
            <MobileNavbar />
            <div>
                <h5>My</h5>
            </div>
            <hr />
            <div>
                <table>
                    <td>{/* 사용자 사진*/}</td>
                    <td>
                        <tr>
                            <h5>기본정보</h5>
                        </tr>
                        <hr/>
                        <tr>
                            <tr>닉네임: </tr>
                            <tr>성별: </tr>
                            <tr>나이대: </tr>
                            <tr>이메일: </tr>
                        </tr>
                    </td>
                </table>
            </div>
            <hr />
            <br />
            <hr />
            <div>
                <Button />
            </div>
            <hr />
            <br />
            <hr />
            <MobileFooter />
        </div>
    )
}

export default MobileMypageInfo;