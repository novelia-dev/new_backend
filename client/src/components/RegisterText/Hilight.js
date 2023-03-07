import React,{useState} from "react";
import image from "../Image/Group 1726.png";
import image2 from "../Image/Group 1727.png";
import image3 from "../Image/Group 1728.png";
import image4 from "../Image/Group 1729.png";

import $ from 'jquery';

function movetoFeed(){
    window.location.href = "/feed";
}


function Hilight(){

    var src;

    const handleChange1 = (e) => {
        src= $('#image1').attr("src");
    }

    const handleChange2 = (e) => {
        src = $('#image2').attr("src");

    }
    
    const handleChange3 = (e) => {
        src = $('#image3').attr("src");
    }
    
    const handleChange4 = (e) => {
        src = $('#image4').attr("src");
    }
    

    return(
        <div>
            <div>
                <h4>하이라이트 설정</h4>
            </div>
            <div>
                <h5>작품의 일러스트와 함께 보여질 하이라이트를 설정하세요.</h5>
            </div>
            <div>
                <table>
                    <tr>
                    <td><img style={{width:"306px", height:"306px"}} src={src}  alt="작품하이라이트" /></td>
                    <td><label>하이라이트 &nbsp;</label><input style={{width:"863px", height:"210px"}} type="text" placeholder="30자이내" id="big"/></td>
                    </tr>
                    </table>
                    <table>
                    <tr>
                        <label>샘플이미지</label>
                    </tr>
                    <tr>
                        <td><img id="image1" style={{width:"164px", height:"164px"}} onClick={handleChange1} src={image} alt="샘플이미지1" /></td>
                        <td><img id="image2" style={{width:"164px", height:"164px"}} onClick={handleChange2} src={image2} alt="샘플이미지2" /></td>
                        <td><img id="image3" style={{width:"164px", height:"164px"}} onClick={handleChange3} src={image3} alt="샘플이미지3" /></td>
                        <td><img id="image4" style={{width:"164px", height:"164px"}} onClick={handleChange4} src={image4} alt="샘플이미지4" /></td>                
                    </tr>
                </table> 
            </div>
            <div>
                <button onClick={movetoFeed}>다음</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Hilight;