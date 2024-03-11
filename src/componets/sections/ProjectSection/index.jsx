import { ProjectList } from "./ProjectList"
import { projects } from "../../../data/projects"
import styles from "../ProjectSection/style.module.css"

export const ProjectSection = () =>{
    return(
    <div id="projects" className={styles.sectionContainer}>
        <section  className={styles.projectSection}>
                <h2 className="title2 ">Projetos</h2>
            <ul >
                {projects.map((project) => (
                    <ProjectList 
                        key={project.id} 
                        title={project.name} 
                        paragraph={project.description} 
                        git={project.git}
                        app={project.app}
                        />
                ))}
            </ul>
        </section>
    </div>
    )
}

            
        
        
