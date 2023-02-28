import React from 'react';

function MobileRegisterPage(){
    return(
        <div>
            <div>
                
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>전체 약관 동의</h5> </td>
                    <td> <button>내용보기</button> </td>
                </table>
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>이용약관 동의</h5> </td>
                    <td> <button>내용보기</button> </td>
                </table>
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>개인정보 수집 및 동의</h5> </td>
                    <td> <button>내용보기</button> </td>
                </table>
            </div>
            <div>
                <button>취소</button>
                <button>다음</button>
            </div>
        </div>
    )
}

export default MobileRegisterPage;