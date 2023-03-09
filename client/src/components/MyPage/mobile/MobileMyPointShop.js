import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function movetoDetail(){
    alert('hello')
}

function MobileMyPointShop(){
    return(
        <div>
            <MobileNavbar />
            <div>
               <h4>포인트샵</h4>
               <hr /> 
               <table>
                <td><h5>8000 point</h5></td>
                <td><button>경품 응모하기</button></td>
               </table>
               <table>
                <tr>
                <td><h5>획득 포인트 : 8000</h5></td>
                <td><button>기프티콘 보관함</button></td>
                </tr>
                <tr>
                <td><h5>사용 포인트 : 8000</h5></td>
                <td><button>포인트 획득/사용내역</button></td> 
                </tr>
                <tr>
                <td><h5>잔여 포인트 : 8000</h5></td>
                </tr>
                </table>
                <hr />
                <h4>교환가능 상품 목록</h4>
                <br />
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
               
                    </tr> <tr>
                       
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
               
                    </tr>
                </table>
            </div>
            <hr />
            <MobileFooter />
        </div>
    )
}   

export default MobileMyPointShop;