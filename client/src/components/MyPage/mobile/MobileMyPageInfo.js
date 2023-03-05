import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function MobileMyPageInfo(){
    return(
        <div>
            <MobileNavbar />
            <div>
            <table>
                <td><h3>MY</h3></td>
                <td><button>변경하기</button></td>
            </table>
            </div>
            <hr />
            <div>
            <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="사용자 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">기본 정보</h4>
                                        <p class="card-text">
                                        <h6>닉네임 : @@@</h6>
                                        <h6>성별: 남자</h6>
                                        <h6>나이대: 20대</h6>
                                        <h6>이메일: ehifewhfiefiehfie</h6>
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div>
                    <h4>선호 장르</h4>
                    <table>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                    </table>
                </div>
                <div>
                    <h4>선호 태그</h4>
                    <table>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h4>금지태그</h4>
                    <table>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                        <tr>
                        <td><button>선택태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        <td><button>선호태그</button></td>
                        </tr>
                    </table>
                </div>
                <hr />
                <MobileFooter />
        </div>
    )
}

export default MobileMyPageInfo;