import React, {useState} from "react";
import axios from "axios";
import "./Tag.css";
var state = {
    createdAuthCode:"",
    authCodeCheck: false,
}

// function EmailConfirmPage(props)
// {
//     const[Email, setEmail] = useState("");
//     const[AuthCode, setAuthCode] = useState("");

//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value);
//     };

//     const onAuthCodeHandler = (event) => {
//         setAuthCode(event.currentTarget.value);
//     };

//     const onSendMailHandler = (event) => {
//         event.preventDefault();
//         state.cretedAuthCode = Math.random().toString(36).substring(2,8);

//         const dataToSubmit = {
//             email: Email,
//             auth: state.createdAuthCode,
//         };

//         var cast = {
//             "email" : Email
//         }
//         localStorage.setItem("cast",JSON.stringify(cast));

//     };
//     const onCheckHandler = (event) => {
//         event.preventDefault();

//         if(state.createdAuthCode === AuthCode){
//             state.authCodeCheck = true;
//             alert("이메일 인증에 성공하셨습니다.");
//             document.getElementById("authorizedConfirm")
//             .setAttribute("onClick", "location.href = '/register");
//         }else{
//             state.authCodeCheck = false;
//             alert("인증코드가 일치하지 않습니다.");
//         }
//     };

//     const Authentication = (event) => {
//         event.preventDefault();

//         if(!state.authCodeCheck){
//             alert("먼저 이메일 인증을 해주세요.");
//         }
//     }
// }

class Registerpage3 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <div>
                
                <Text />
                
            </div>
            
            
        )
    }
}



function Text(){

    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [selected, setSelected] = useState("");
    const [age, setAge] = useState("");
    const [route, setRoute] = useState("");

    


    const onnicknamehandler = (nickname) => {
        setnickname(nickname.target.value);
    }

    const onemailhandler = (email) => {
        setemail(email.target.value);
    }

    const ongenderhandler = (gender) => {
        setSelected(gender.target.value);
    }

    const onAgehandler =(age) => {
        setAge(age.target.value);
    }

    const onRoutehandler = (route) => {
        setRoute(route.target.value);
    }

    function activeButton(){
        alert("확인완료");
    }

        function submitactiveButton(event){
            event.preventDefault();
            alert("회원가입이 완료되었습니다.");

            var cast = {
                nickname: nickname,
                gender : selected,
                email: email,
                age : age
            };

            axios.post('http://localhost:8000/users',cast)
            .then(response =>{
                if(response.data.success)
                {
                    console.log('회원가입 성공')
                } else {
                    console.log('회원가입 실패')
                }
            })

            localStorage.setItem("cast",JSON.stringify(cast));
            window.location.href="/register4"; }
        
        const style={
            'position':'absolute',
            'font-weight': 400,
            'border-width':"1px",
            'border-style':"solid",
            'border-color':"#E5E5E5",
            'margin-left': "669px",
            'width':"588px"
        }
        const style1={
            'width':"151px",
            'height':"17px",
            'color':"#666666",
            'font-family': "Roboto",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style2={
            'width':"240px",
            'height':"30px",
           
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style3={
            'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"131px",
            'height':"45px",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "18.75px",
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            'margin-left':"15px",
            'margin-top':"15px"
            
        }
        const Button = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick, setPick] = useState(arr);
            const [select, setSelect] = useState([]);
          
            return pick.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select.includes(item.id)
                      ? setSelect((select) => [...select, item.id])
                      : setSelect(select.filter((button) => button !== item.id));
                  }}
                  className={
                    select.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };
          const Button1 = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick1, setPick1] = useState(arr);
            const [select1, setSelect1] = useState([]);
          
            return pick1.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select1.includes(item.id)
                      ? setSelect1((select1) => [...select1, item.id])
                      : setSelect1(select1.filter((button) => button !== item.id));
                  }}
                  className={
                    select1.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };
          const Button2 = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick2, setPick2] = useState(arr);
            const [select2, setSelect2] = useState([]);
          
            return pick2.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select2.includes(item.id)
                      ? setSelect2((select2) => [...select2, item.id])
                      : setSelect2(select2.filter((button) => button !== item.id));
                  }}
                  className={
                    select2.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };

         
    return(
       
    <div style={{'position':"static"}}>
         
        <div style={style}>
         &nbsp; &nbsp;회원가입
         <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
        <div style={style1}>
        &nbsp; &nbsp;닉네임*
        </div>
        <div style={style2}>
        &nbsp; &nbsp;<input type="label"placeholder="플레이스 홀더" onChange={onnicknamehandler}></input>
                     
        </div><botton style={style3} onClick={activeButton}>중복확인</botton>
        
        <div style={{marginTop:"15px"}}>
        &nbsp; &nbsp;<select name="성별" style={{width:"240px",height:"30px"}} onChange={ongenderhandler}>
                  <option defaultValue="성별(남/여)" hidden>성별(남/여)*</option>
                  <option value="남">
                    남
                  </option>
                  <option value="여">
                    여
                  </option>
               </select>
            </div>
            <div style={{marginTop:"15px"}}>
        &nbsp; &nbsp;<select name="나이대" style={{width:"240px",height:"30px"}} onChange={onAgehandler}>
                    <option defaultValue="나이대" hidden>나이대*</option>
                    <option value="10대">
                        10대
                    </option>
                    <option value="20대">
                        20대
                    </option>
                    <option value="30대">
                        30대
                    </option>
                    <option value="40대이상">
                        40대이상
                    </option>
                </select>
        </div>
        <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
        이메일*
            </div>
            <div></div>
            <div>
            &nbsp; &nbsp;<input type="label" style={{width:"240px",height:"30px",marginTop:"5px"}} placeholder="본인인증용 이메일" onChange={onemailhandler}></input>
            </div>
            <div>
           <button style={{marginTop:"15px",marginLeft:"15px"}}>Check</button>
            </div>
            <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
             이메일 확인*
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <input type="label" style={{width:"240px",height:"30px"}} placeholder="이메일 확인"></input>
            </div>
            <div>
           <button style={{marginTop:"15px",marginLeft:"15px"}}>Check</button>
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px"}}>
            <select name="유입경로" style={{width: "248px", height: "38px"}} onChange={onRoutehandler} >
                    <option defaulValue="유입경로" hidden>유입경로*</option>    
                </select> 
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
             선호장르
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px"}}>
                <Button/>
                <br></br>
            </div>
          
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
              선호태그
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
                금지태그
            </div>
            <div style={{marginLeft:"15px",marginTop:"15px"}}>
                <Button2/>
                <br></br>
            </div>
            <div style={{marginLeft:"15px",marginTop:"15px"}}>
        <button style={style3} onClick={submitactiveButton}>입력완료</button>
        </div>
        </div>
        </div>
    )
}






export default Registerpage3;