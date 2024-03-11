import styles from "../AboutMeSection/style.module.css"
import my from "../../../assets/img.jpeg"

export const AboutMeSection = () => {
    return( 
        <div id="about" className={styles.container} >
            <section  className={styles.containerFlex}>
                    <strong>
                        {/* <h2 className="title2 ">Um pouquinho sobre mim</h2> */}
                        <img src={my} alt="my image" />
                    </strong>
                    <div>
                        <p className="paragraph">Sou uma migrante de Assistente Social para TI, 
                        apesar de curioso 🤔, quero te dizer que como uma pessoa intensa que sou 😅,
                        me joguei nessa área e estou apaixonada com cada descoberta.<br></br>
                        <br></br>
                        Cada contato com o universo dos algoritmos me deixa impressionada 🤯. <br></br>
                        Me entusiasma saber que posso facilitar a vida das pessoas através da tecnologia.<br></br>
                        <br></br>
                        E, falando em ajudar pessoas, essa é a minha grande paixão!<br></br>
                        Dediquei mais de 20 anos lidando diretamente com causas pessoais, em três estados diferentes,         trabalhando com diversos tipos de serviços voluntários. <br></br>
                        <br></br>
                        Minha maior habilidade é lidar com gente 😍. A maioria das pessoas 'difíceis' de lidar carrega             consigo uma bagagem de problemas mal resolvidos que desconhecemos ❤️. Por isso, acredito que,                se fizermos esse exercício de consciência, podemos ser mais empáticos com nosso próximo e                   até ajudar aquela pessoa extrair o melhor de si 💕.<br></br>
                        <br></br>

                        Meu objetivo é trabalhar com desenvolvimento de software, mas precisamente com Front-end 👩‍💻.                No entanto, estou aberta e disposta a explorar esse vasto território da tecnologia.</p>
                    </div>
            </section>
        </div>      
    )
}


