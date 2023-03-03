import React from "react";
import image from "../Image/수평로고.png";
import './Posts.css';


const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      
        {posts.map((post) => (
          <div className="contanier-fluid" key={post.id}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img src={image} alt="사진" />
                    </div>
                      <div class="card-body">
                        <h4 class="card-title">재벌집 막내아들</h4>
                        <p class="card-text">
                          <h6>산경</h6>
                          <h6>현대 판타지 &nbsp; D-14</h6>
                          <h6>10/30 &nbsp; 10/10</h6>
                          <h6>태그</h6>
                          <table>
                            <tr>
                              <button>선택태그</button>
                              <button>선택태그</button>
                              <button>선택태그</button>
                            </tr>
                            <tr>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            </tr>
                            <tr>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            </tr>
                            <tr>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            <button>선호태그</button>
                            </tr>
                          </table>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div>
        ))}
   
    </>
  );
};
export default Posts;