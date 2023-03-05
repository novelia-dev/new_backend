import React from "react";
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function exchange(){
  if(window.confirm("정말 교환하시겠습니까?") == true)
  {
    alert("교환이 완료되었습니다!")
  }
  else{
    return;
  }
}

function movetoInput(){
  window.location.href="/myinput";
}

function MobileDetailPointShop(){
    return(
        <div>
            <MobileNavbar />
            <div>
                <h4>포인트 샵</h4>
                <hr />
            </div>
            <div>
                <table>
                    <td>
                        <h4>8000 Point</h4>
                    </td>
                    <td>
                        <tr><button onClick={movetoInput}>경품 응모하기</button></tr>
                    </td>
                </table>
            </div>

            <br />

            <hr />

            <div>
                <table>
                    <td><img alt="기프티콘 이미지" /></td>
                    <td>
                        <tr><h4>스타벅스 아메리카노 기프티콘</h4></tr>
                        <tr>
                            <h6>5000 point</h6>
                            <h6>남은수량: 100개</h6>
                            <select>
                                <option value="1" default>1개</option>
                                <option value="2">2개</option>
                                <option value="3">3개</option>
                                <option value="4">4개</option>
                                <option value="5">5개</option>
                                <option value="6">6개</option>
                                <option value="7">7개</option>
                                <option value="8">8개</option>
                                <option value="9">9개</option>
                                <option value="10">10개</option>
                            </select>
                        </tr>
                        <tr><button onClick={exchange}>교환하기</button></tr>
                    </td>
                </table>
            </div>
            <div>
                <h4>상품 더 보기</h4>
                <table>
                    <tr>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>5000point</h6>
                         <h6>남은 수량 : 100개</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>5000point</h6>
                         <h6>남은 수량 : 100개</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
          </tr>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>5000point</h6>
                         <h6>남은 수량 : 100개</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>5000point</h6>
                         <h6>남은 수량 : 100개</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                </table>
            </div>
            <hr />
        <MobileFooter />
        </div>
    )
}

export default MobileDetailPointShop;