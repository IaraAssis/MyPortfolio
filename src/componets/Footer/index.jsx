import {user} from "../../data/user"
import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import git from "../../assets/github-icon.png"
import style from "../Footer/style.module.css"

export const Footer = () => {
    return(
        <footer className={style.footer} >
            <div>
            <h1 className="title2">Contato</h1>
                <img src={whatsapp} alt="whatsapp" />
                <img src={linkedin} alt="linkedin" />
                <img src={git} alt="git" />
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
        </footer>
    )
}
