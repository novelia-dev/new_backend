import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function MobileMyInput(){
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
               <hr />
               <h4>경품 응모하기</h4>
               <hr />
               <img alt="경품" />
               <table>
                <tr>
                <td><h5>3월 2주차 경품 응모권 (3월 6일 발표)</h5></td>
                <td></td>
                </tr>
                <tr>
                 <td>
                    <h5>bhc 황금올리브 기프티콘 1매</h5>
                    <h5>문화상품권 1만원 3매</h5>
                    <h5>스타벅스 아메리카노 기프티콘 5매</h5>
                </td>
                <td>
                <h5><button>경품 응모권 교환하기</button></h5>    
                </td>   
                </tr>
               </table>
               <hr />
               <h5>상품 더 보기</h5>
               <table>
               <tr>
                       
                       <td> <div className="contanier-fluid">
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
                       <td> <div className="contanier-fluid">
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
               </table>
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileMyInput;