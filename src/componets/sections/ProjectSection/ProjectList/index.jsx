import gitHub from "../../../../assets/gitgit-icon.png"
import styles from "../ProjectList/style.module.css"


export const ProjectList= ({title, paragraph, git, app}) =>{   
    return(
        <li className={styles.ProjectList}>
            <div >
                <h2 className="title3">{title}</h2>
                <img src={gitHub} alt="Logo Git" />
            </div>
            <span>
                <p className="paragraph">{paragraph}</p>
                <strong>
                    <a className="link" href={git} target="_blank" rel="noopener noreferrer"> Saiba mais</a>
                    <a className="link" href={app}target="_blank" rel="noopener noreferrer">Aplicação</a>
                </strong>
            </span>
        </li>
    )
}


