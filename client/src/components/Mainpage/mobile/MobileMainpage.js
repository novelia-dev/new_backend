import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';


function MobileMainpage(){
    return(
        <div>
            <MobileNavbar />
            <div>
                <table>
                    <td><img alt="돋보기" /></td>
                    <td><input type="text" /></td>
                </table>
            </div>
            <div>
                <img alt="배너" />
            </div>
            <hr />
            <div>
              <h4>선호태그 작품</h4>
              <table>
                <td><button>선호태그</button></td>
                <td><button>선호태그</button></td>
                <td><button>선호태그</button></td>
                <td><button>선호태그</button></td>
                <td><button>선호태그</button></td>
                <td><button>선호태그</button></td>
              </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
              <h4>스크랩 작품</h4>
             
            </div>
            <div>
                <table>
                    <tr>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
              <h4>피드백 작품</h4>
             
            </div>
            <div>
                <table>
                    <tr>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                        <td><img alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <table>
                <tr><img alt="광고1" /></tr>
                <tr><img alt="광고2" /></tr>
                <tr><img alt="광고3" /></tr>
            </table>
            <div>
                <a href="/privacy">개인정보처리방침 &nbsp;</a>
                <a href="/tos">이용약관 &nbsp;</a>
                <a href="/notice">공지사항 &nbsp;</a>
                <a href="/ask">문의하기</a>
            </div>
            <h5>비지니스 메일 novelier@gmail.com</h5>
            <h3>노벨리에</h3>
            <MobileFooter />
        </div>
    )
}

export default MobileMainpage;