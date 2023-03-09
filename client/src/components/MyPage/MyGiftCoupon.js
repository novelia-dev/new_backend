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
    window.location.href="/myinput"
  }

  function movetoStats(){
    window.location.href="/mypointstats";
  }


function MyGiftCoupon(){
    return(
        <div>
            <div>
                <h4>기프티콘 보관함</h4>
                <h5>교환한 기프티콘의 목록입니다.</h5>
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
                        <tr><button>기프티콘보관함</button></tr>
                        <tr><button onClick={movetoStats}>포인트 획득/사용내역</button></tr>
                    </td>
                </table>
            </div>
            <br />
            <div>
                <h5>소지한 기프티콘</h5>
            </div>
           
            <div>
                <table>
                    <tr>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
          </tr>
          <tr>
          <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
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
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                        <p class="card-text">
                         <h6>수량 : 1개</h6>
                         <h6>유효기간 : 2023/10/04</h6>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
          </tr>
                </table>
            </div>
        </div>
    )
}

export default MyGiftCoupon;