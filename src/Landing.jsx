import LogoPC from './assets/LOGO_PROTOCOLOR.svg'

function Landing (){

    return(
        <div className="flex conteiner flex-col items-center bg-gradient-to-br from-white to-yellow-100">
                <h1 className="text-5xl font-mono text-center mt-10 tracking-tigh">Seja bem vindo(a) ao Website da</h1>
                <img src={LogoPC} style={{width:300}} className="mt-10" />
                <h1 className="sm:text-9xl text-5xl tracking-tight font-semibold hover:tracking-wider transition-all duration-500 cursor-pointer">Protocolor</h1>
        </div>
    )
}

export default Landing