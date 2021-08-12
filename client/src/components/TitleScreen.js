import './Pixel_Models.scss'
import './Title_Page.scss'
import PixelName from '../images/NameTitle.png'
import React, { useEffect, useState } from 'react';

const Title = () =>{
    const [id, setID] = useState("html");
    let count = 0
    // setInterval(() => {
    //     if(count>0){
    //         setID("html2")
    //         count = 0
    //     }else{
    //         setID("html")
    //         count++
    //     }
    // }, 8500)

    return(
        <div>
            <img class='title' src={PixelName} />
            <div id={id}></div>
            <div id="sam"></div>
            <div id="crt"></div>
        </div>
    )
}

export default Title;