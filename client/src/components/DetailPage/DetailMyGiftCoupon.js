import React from "react";
import image from '../Image/Starbucks.png';
import image1 from '../Image/Ticket.png';

function exchange(){
  if(window.confirm("정말 사용하시겠습니까?") == true)
  {
    alert("사용이 완료되었습니다!")
  }
  else{
    return;
  }
}

function download(){
    if(window.confirm("다운로드 하시겠습니까?") == true)
    {
        alert("다운로드가 완료되었습니다.")
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

function DetailMyGiftCoupon(){
    return(
        <div>
            <div>
                <h4>기프티콘 보관함</h4>
                <h5>교환한 기프티콘 목록입니다.</h5>
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
                <h5>교환한 기프티콘</h5>
            </div>
            <div>
                <table>
                    <tr><img src={image} style={{width:"159.99px", height:"159.99px"}} alt="기프티콘 이미지" /></tr>
                    <tr>
                        
                        <table>
                        <tr>
                            <td><h4>스타벅스 아메리카노 기프티콘 &nbsp;</h4></td>
                            <td><button onClick={download}>다운로드</button></td>
                            <td><button onClick={exchange}>사용한 기프티콘으로 표시하기</button></td>
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

export default DetailMyGiftCoupon;