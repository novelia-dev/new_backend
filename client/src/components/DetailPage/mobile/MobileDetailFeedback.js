import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';

function MobileDetailFeedback(){
    return(
        <div>
            <MobileNavbar />
            <div>
               <table>
                    <td><img alt="작품이미지" /></td>
                    <td>
                        <tr>
                            <h4>아빠가 힘을 숨김</h4>
                            <h5>고은채</h5>
                            <br />
                            <h5>선택태그</h5>
                            <hr />
                            <table>
                                <tr>
                                    <td><button>선택태그</button></td>
                                    <td><button>선택태그</button></td>
                                    <td><button>선택태그</button></td>
                                </tr>
                                <tr>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                </tr>
                                <tr>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                </tr>
                                <tr>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                    <td><button>선호태그</button></td>
                                </tr>                                
                            </table>
                        </tr>
                    </td>
                </table>
                <div>
                    <hr />
                    <table>
                        <td><h4>|</h4></td>
                        <td><h4>&nbsp; 로맨스 판타지</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;D-14</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;10/30</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;10/10</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                    </table>    
                </div>
                <div>
                <h5>작품소개</h5>    
                </div>
                <hr />
                 <input type="text" value="내용내용내용" />
                 <div>
                    <table>
                        <tr>
                        <td><img alt="작품이미지" /></td>
                        <td><h4>1화</h4></td>
                        </tr>
                        <tr>
                        <td><img alt="작품이미지" /></td>
                        <td><h4>2화</h4></td>
                        </tr>
                        <tr>
                        <td><img alt="작품이미지" /></td>
                        <td><h4>3화</h4></td>
                        </tr>
                        <tr>
                        <td><img alt="작품이미지" /></td>
                        <td><h4>4화</h4></td>
                        </tr>
                    </table>
                 </div>
                 <button>피드백하기</button>
            </div>
        </div>
    )
}

export default MobileDetailFeedback;