import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function MobileDetailScrapread(){
    return(
        <div>
            <MobileNavbar />
            <div className="environment">
                <table>
                    <tr><hr /></tr>
                    <tr><td><h5>밝기</h5></td><td><input type="range" min={0} max={1} color="white" step={0.02} /></td></tr>
                    <tr><hr /></tr>
                    <tr><h5>테마</h5></tr>
                    <tr><hr /></tr>
                    <tr><td><h5>글꼴</h5></td><td><h5>고딕체 &nbsp; 바탕체 &nbsp; 명조체</h5></td></tr>
                    <tr><hr /></tr>
                    <tr><td><h5>글자크기</h5></td><td><select></select></td></tr>
                    <tr><hr /></tr>
                    <tr><td><h5>줄간격</h5></td><td><select></select></td></tr>
                    <tr><hr /></tr>
                    <tr><button>보기 설정 초기화</button></tr>
                </table>
            </div>
            <div>
                <input type="text" value="내용" />
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileDetailScrapread;