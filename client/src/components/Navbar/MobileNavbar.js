import React from 'react';
import image1 from '../Image/menu-burger (2) 1.png';
import image2 from '../Image/수평로고 (1).png';
import image3 from '../Image/shopping-cart (2) 1.png';
import image4 from '../Image/bell (1) 1.png';


function MobileNavbar(){
    return(
        <div>
            <table>
                <td><img src={image1} alt="image1" /></td>
                <td><img src={image2} alt="image2" /></td>
                <td><img src={image3} alt="image3" /></td>
                <td><img src={image4} alt="image4 "/></td>
            </table>
        </div>
    )
}

export default MobileNavbar;