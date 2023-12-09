import LogoPC from './assets/LogoProtoColor_Amarelo.svg'

function NavBar(){


    return(
        <nav className="text-3xl px-10 py-5 shadow-xl">
            <a href=""><img src={LogoPC} style={{width:50}} alt='Logo escrito "PC"' /></a>
        </nav>
    )
}

export default NavBar