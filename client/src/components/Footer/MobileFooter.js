import React from 'react';
import image1 from '../Image/home (3) 1.png';
import image2 from '../Image/heart (2) 1.png';
import image3 from '../Image/bookmark (1) 1.png';
import image4 from '../Image/hand-holding-heart (1) 2.png';
import image5 from '../Image/user (2) 1.png';


function MobileFooter(){
    return(
        <div>
            <table>
                <tr>
                    <td><img src={image1} alt="image1" /><h6>home</h6></td>
                    <td><img src={image2} alt="image2" /><h6>선호태그</h6></td>
                    <td><img src={image3} alt="image3" /><h6>스크랩</h6></td>
                    <td><img src={image4} alt="image4" /><h6>피드백</h6></td>
                    <td><img src={image5} alt="image5" /><h6>My</h6></td>
                </tr>
            </table>
        </div>
    )
}

export default MobileFooter;