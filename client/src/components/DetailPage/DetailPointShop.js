import React from "react";
import image from '../Image/Starbucks.png';
import image1 from '../Image/Ticket.png';

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

function movetoStats(){
  window.location.href="/mypointstats";
}

function movetoGift(){
  window.location.href="/mygift";
}

function DetailPointShop(){
    return(
        <div>
            <div>
                <h4>포인트 샵</h4>
                <h5>모은 포인트를 사용할 수 있습니다.</h5>
            </div>
            <div>
                <table>
                    <td><img alt="사용자사진" /></td>
                    <td>
                        <h6>획득 포인트 : 8000</h6>
                        <h6>사용 포인트 : 8000</h6>
                        <h6>잔여 포인트 : 8000</h6>
                    </td>
                    <td>
                        <tr><button onClick={movetoInput}>경품 응모하기</button></tr>
                        <tr><button onClick={movetoGift}>기프티콘보관함</button></tr>
                        <tr><button onClick={movetoStats}>포인트 획득/사용내역</button></tr>
                    </td>
                </table>
            </div>

            <br />

            <div>
                <h5>교환가능 상품 목록</h5>
            </div>
            <div>
                <table>
                    <tr><img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" /></tr>
                    <tr>
                        <tr><h4>스타벅스 아메리카노 기프티콘</h4></tr>
                        <table>
                        <tr>
                            <td><h4>수량 &nbsp;</h4></td>
                            <td><select  style={{width:"237px"}}>
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
                            </select></td>
                            <td><button onClick={exchange}>교환하기</button></td>
                        </tr>
                        </table>
                        
                    </tr>
                    
                </table>
            </div>
            <div>
                <table>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                    <img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" />
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
                    <img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" />
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
                    <img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" />
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
                    <img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" />
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

        </div>
    )
}

export default DetailPointShop;