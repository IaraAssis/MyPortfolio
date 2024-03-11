import { TechList } from "./TechList"
import {technologies} from "../../../data/technologies"
import styles from "../TechSection/TechList/style.module.css"


export const TechSection = () =>{
    return(
        <div id="techs"  className={styles.component} >
            <section className={styles.techSection}>
                <h2 className="title2">Tecnologias</h2>
                <ul>
                    {technologies.map((technology) => (
                        <TechList key={technology.id} title={technology.name} img={technology.img}/>
                    ))}
                </ul>
            </section>
        </div>
    )
}


