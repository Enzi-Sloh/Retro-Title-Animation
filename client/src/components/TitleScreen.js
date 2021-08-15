import './Pixel_Models.scss'
import './Title_Page.scss'
import S from '../images/letter_S.png' 
import A from '../images/letter_A.png' 
import M from '../images/letter_M.png' 
import U from '../images/letter_U.png' 
import E from '../images/letter_E.png' 
import L from '../images/letter_L.png' 
import O from '../images/letter_O.png' 
import H from '../images/letter_H.png' 
import React, { useEffect, useState } from 'react';

const Title = () =>{
    const [id, setID] = useState("html");
    let count = 0
    setInterval(() => {
        if(count>0){
            setID("css")
            count = 0
        }else{
            setID("html")
            count++
        }
    }, 6000)

    return(
        <div className="wrap">
            <div class='title'>
            <img class='s1'  src={S} />
            <img class='a'  src={A} />
            <img class='m'  src={M} />
            <img class='u'  src={U} />
            <img class='e'  src={E} />
            <img class='l1'  src={L} />
            <img class='l2'  src={L} />
            <img class='o'  src={O} />
            <img class='s2'  src={S} />
            <img class='h'  src={H} />
            </div>
            <div id={id}></div>
            <div id="sam"></div>
            <div id="crt"></div>
        </div>
    )
}

export default Title;