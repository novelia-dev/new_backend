import React, {useState,useEffect} from 'react';

function movetowebregister(){
    window.location.href="/register";

}

function movetomobileregister(){
    window.location.href="/mobileregister";
}

function ConnectRegister(){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    
    useEffect(()=>{
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize",resizeListener);
    })

    function Connector(){
        if(innerWidth <= 360)
        {
            movetomobileregister();
        }
        else{
            movetowebregister();
        }
    }

    return(
        <div>
            <Connector />
        </div>
    )

}

export default ConnectRegister;