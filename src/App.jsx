import NavBar from "./NavBar"
import LogoPC from './assets/LOGO_PROTOCOLOR.svg'
import Landing from "./Landing"
import Repo from "./Repositorio"
import './App.css'
function App(){


    return(
        <div className="scrollbar scrollbar-track-transparent">
            <Landing/>
            <Repo/>
        </div>
    )
}

export default App