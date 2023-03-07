import React from "react";



function movetosecond(){
    window.location.href="/text/3";
}

function RegisterText4(){


    return(
        <div>
            <div><h3>2화등록</h3></div>
            <div><h5>2화 내용을 입력해주세요.</h5></div>
            <div><h5>에피소드 제목</h5></div>
            <div><input style={{width: "368px", height:"32px"}}type="text" textAlignVertical="top" placeholder="15자 이내" /></div>
            <div><h5>본문 입력</h5></div>
            <div><input style={{width:"1169px", height:"619px"}} type="text"  placeholder="5000자 이내  잠깐! 아직 성인 컨텐츠는 등록할 수 없습니다. 명심해주세요." /></div>
            <br />
            <div><button style={{width: "102px", height:"45px", borderRadius:"4px", backgroundColor:"#FFFFFF",border:"1px solid #AA0140", marginLeft: "600px" }} onClick={movetosecond}>다음</button></div>
            </div>
    );
}

export default RegisterText4;