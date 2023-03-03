import React from "react";
import image1 from "../Image/Group 1722.png";
import image2 from "../Image/Group 1723.png";
import image3 from "../Image/Group 1724.png";



function FeedSelect(){
    return(
        <div>
            <div>
                <h4>피드백 종류 선택</h4>
            </div>
            <div>
                <h5>독자들에게 요청할 피드백의 종류를 선택해주세요!</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td>객관식</td>
                        <td>주관식</td>
                        <td>1+1</td>
                    </tr>
                    <tr>
                        <td><img src = {image1} alt="객관식"/></td>
                        <td><img src = {image2} alt="주관식"/></td>
                        <td><img src = {image3} alt="1+1"/></td>
                    </tr>
                    <tr>
                        <td>
                          <h5>가격: 3만원</h5>
                          <h5>게시기간: 7일</h5>
                          <h5>내용: 독자 30명에게 받는 최대 40가지 객관식 피드백</h5>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <h5>가격: 3만원</h5>
                          <h5>게시기간: 7일</h5>
                          <h5>내용: 독자 10명에게 받는 주관식 피드백</h5>
                          <input type="checkbox" />
                        </td>
                        <td>
                           <h5>가격: 5.5만원</h5>
                           <h5>게시기간: 14일</h5>
                           <h5>내용: 앞의 2가지 상품을 할인된 가격에 제공</h5>
                           <input type="checkbox" /> 
                        </td>
                    </tr>
                    <tr>
                        <h5>*결제는 게시기간이 끝난 뒤 작가 피드백을 열람하려고 할 때 진행됩니다. </h5>
                    </tr>
                    <button>다음</button>
                </table>
            </div>
        </div>
    )
}

export default FeedSelect;