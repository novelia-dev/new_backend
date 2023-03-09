import React, {useState,useEffect} from 'react';

function movetowebmypage(){
    window.location.href="/myinfo";

}

function movetomobilemypage(){
    window.location.href="/mobilemyinfo";
}

function ConnectMyPage(){
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
            movetomobilemypage();
        }
        else{
            movetowebmypage();
        }
    }

    return(
        <div>
            <Connector />
        </div>
    )

}

export default ConnectMyPage;