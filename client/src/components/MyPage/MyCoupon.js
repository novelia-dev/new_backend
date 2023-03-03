import React from "react";



function MyPointStats(){
    return(
        <div>
            <div>
                <h4>쿠폰함</h4>
                <h5>현재 가지고 있는 쿠폰목록 입니다.</h5>
            </div>
            <div>
                <table>
                    <td><img alt="사용자사진" /></td>
                    <td>
                        <h6>사용 가능 쿠폰 수 : 5개</h6>
                    </td>
                    <td>
                        
                    </td>
                </table>
            </div>
            <br />
            <div>
                <h4>사용가능한 쿠폰 목록</h4>
                <h5>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</h5>
                <table>
                    <tr>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</tr>
                    <tr>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</tr>
                    <tr>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</tr>
                    <tr>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</tr>
                    <tr>쿠폰명 &nbsp; &nbsp; 쿠폰내용 &nbsp; &nbsp; 유효기간</tr>
                </table>
            </div>
        </div>
    )
}

export default MyPointStats;