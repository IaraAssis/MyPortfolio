import styles from "../TechList/style.module.css"
export const TechList= ({title, img}) =>{
    
    return(
    
        <li className={styles.techList}>
            <img src= {img} alt={title} />
            <h2 className="title3">{title}</h2>
        </li>
    )
}