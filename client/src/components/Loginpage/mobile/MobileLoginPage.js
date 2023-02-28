import React from 'react';
import logo from '../../Image/수직로고.png';

function MobileLoginPage(){

    return(
        <div>
                <hr />
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
            <button>로그인</button>  
            </div>
            <div>
            <button>회원가입</button>
            </div>
            
            <hr />
        </div>
    )
}

export default MobileLoginPage;