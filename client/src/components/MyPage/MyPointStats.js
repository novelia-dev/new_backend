import React from "react";

function movetoInput(){
    window.location.href="/myinput";
}

function MyPointStats(){
    return(
        <div>
            <div>
                <h4>포인트 획득/사용내역</h4>
                <h5>지금까지 모은 포인트와 사용한 포인트 내역입니다.</h5>
            </div>
            <div>
                <table>
                    <td><img alt="사용자사진" /></td>
                    <td>
                        <h6>획득 포인트 : 8000</h6>
                        <h6>사용 포인트 : 8000</h6>
                        <h6>잔여 포인트 : 8000</h6>
                    </td>
                    <td>
                        <tr><button onClick={movetoInput}>경품 응모하기</button></tr>
                        <tr><button>기프티콘보관함</button></tr>
                        <tr><button>포인트 획득/사용내역</button></tr>
                    </td>
                </table>
            </div>
            <br />
            <div>
                <h4>포인트 획득/사용내역</h4>
                <h5>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용 날짜</h5>
                <table>
                    <tr>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용날짜</tr>
                    <tr>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용날짜</tr>
                    <tr>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용날짜</tr>
                    <tr>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용날짜</tr>
                    <tr>내용 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 획득/사용날짜</tr>
                </table>
            </div>
        </div>
    )
}

export default MyPointStats;