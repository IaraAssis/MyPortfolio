import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from "./style.module.css";

export const ContactsSection = () => {
    return (
        <div id="contacts" className={styles.container}>
            <section className={styles.contacts}>
                <span>
                    <h2 className="title2">Vamos conversar?</h2>
                    <h3 className="paragraph">Me chama!</h3>
                </span>
                <div>
                    <a 
                        href="mailto:iarareis.work@gmail.com"  
                        target="_blank" 
                        rel="noopener noreferrer">
                        <button className={styles.email}><FaEnvelope size={35} /></button>
                    </a>
                    <a 
                        href="https://api.whatsapp.com/send?phone=+55+7198888-9346"                   target="_blank" 
                        rel="noopener noreferrer">
                        <button className={styles.whatsapp}><FaWhatsapp size={35} /></button>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/iara-reis-%F0%9F%8C%BC-010a89240/"
                        target="_blank" 
                        rel="noopener noreferrer">
                        <button className={styles.linkedin}><FaLinkedin size={35} /></button>
                    </a>
                </div>
            </section>
        </div>
    );
};



