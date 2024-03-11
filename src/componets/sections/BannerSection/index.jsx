import banner from "../../../assets/flowers.png"
import styles from "../BannerSection/style.module.css"


export const BannerSection = () =>{
    return(      
        <section id="home" className={styles.flexBox}>
            <div>
                <img src={banner} alt="Banner" />
                <h2 className="title1">Prazer, Iara!</h2>
                <p className="paragraph">
                "Deixe-me te contar um pouquinho da minha trajetória e das aventuras que vivi até agora. Bora nessa jornada cheia de altos e baixos, risadas e aprendizados? Tô animada pra compartilhar tudo com você! Vem comigo! "</p>
            </div> 
        </section>
    )
}



