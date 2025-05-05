import Top from "./Header/Menu.jsx";
import Central from "./Hero/Central.jsx";
import Sidemenu from "./Header/menulateral.jsx"
import About from "./About/sobre.jsx";
import Projectsgeral from "./Projects/projetos.jsx";
import Tools from "./Tools/tool.jsx";
import Footer from "./Footer/footer.jsx";
import "./Geral/base.css"

function Home(){
    return(
    <>
        <Top/>
        <Central/>
        <Sidemenu/>
        <About/>
        <Projectsgeral/>
        <Tools/>
        <Footer/>
    </>
    )
}

export default Home