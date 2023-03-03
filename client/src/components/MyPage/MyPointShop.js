import React from "react";

function movetoDetail(){
  window.location.href="/mypoint/:id";
}
function movetoInput(){
  window.location.href="/myinput"
}

function MyPointShop(){
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
                        <tr><button>기프티콘보관함</button></tr>
                        <tr><button>포인트 획득/사용내역</button></tr>
                    </td>
                </table>
            </div>
            <br />
            <div>
                <table>
                    <tr>
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                    <tr>
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card" onClick={movetoDetail}>
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
                </table>
            </div>
        </div>
    )
}

export default MyPointShop;