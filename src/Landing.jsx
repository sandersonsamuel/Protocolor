import { useState } from 'react'
import LogoPC from './assets/LOGO_PROTOCOLOR.svg'

function Landing (){

    const [hoverImg, setHoverImg] = useState(false)

    const onHoverImg = () => {
        setHoverImg(true)
      };
    
    const offHoverImg = () => {
        setHoverImg(false)
    };

    return(
        <div className="flex conteiner flex-col items-center bg-gradient-to-br from-white to-yellow-100">
            <h1 className="text-5xl font-mono text-center mt-10 tracking-tigh">Bem-vindo ao Website da</h1>
            <h1>{hoverImg}</h1>
            <img src={LogoPC} style={{width:300}} className="mt-10" onMouseEnter={onHoverImg} onMouseLeave={offHoverImg}/>
            <h1 className={`${hoverImg ? "tracking-wider" : " "} sm:text-9xl sm:mt-0 mt-5 text-5xl tracking-tight font-semibold transition-all duration-500`}>Protocolor</h1>
        </div>
    )
}

export default Landing