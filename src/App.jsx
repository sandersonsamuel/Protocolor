import NavBar from "./NavBar"
import LogoPC from './assets/LOGO_PROTOCOLOR.svg'
import Landing from "./Landing"
import Repo from "./Repositorio"
import './App.css'
import Membros from "./Membros"
function App(){


    return(
        <div className="scrollbar scrollbar-track-transparent">
            <Landing/>
            <Repo/>
            <Membros/>
        </div>
    )
}

export default App