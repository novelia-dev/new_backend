import React from 'react';

function MobileWriteFeedback(){
    return(
        <div>
            <div>

            
            <table>
                <td><h4>아빠가 힘을 숨김</h4></td>
                <td><h5>주관식 피드백</h5></td>
                <td><img alt="logo" /></td>
            </table>
            <hr />
            <h4>별점</h4>
            <hr />
            <h4>좋았던 점</h4>
            <input style={{width: "330px", height: "150px"}} type="text" placeholder ="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백입니다. 높임말을 사용해주세요. 욕설 비난, 조롱의 경우 서비스 이용 제제 사유입니다." />
            <h4>아쉬웠던 점</h4>
            <input style={{width: "330px", height: "150px"}} type="text" placeholder ="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백입니다. 높임말을 사용해주세요. 욕설 비난, 조롱의 경우 서비스 이용 제제 사유입니다." />
            </div>
            <button>제출하기</button>
        </div>
    )
}

export default MobileWriteFeedback;