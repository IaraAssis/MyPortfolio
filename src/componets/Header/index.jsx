// import logo from "../../assets/img.jpeg";
import styles from "../Header/style.module.css";
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'; 
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
    const [ size, setSize ] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        setSize({ width: window.innerWidth , height: window.innerHeight });
        const handleSize = () => {
            setSize({ width: window.innerWidth , height: window.innerHeight });
        }
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, [])

    useEffect(() => {
        if(size.width > 800){
            setMenuOpen(true);
        }
    }, [size.width])

    return(
        <header className={styles.flexBox}>   
                <h1 className="title3">Iara Reis</h1>
                <button 
                    className={styles.hamburger} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    {!menuOpen ? <FaBars size={20} /> : <IoMdClose size={20}/>}
                </button>
                {menuOpen &&                               
            <nav 
                className={styles.menu}>
                <Link 
                    className="label" 
                    to="home" 
                    smooth={true} 
                    duration={2000}>
                        Home
                </Link>
                <Link 
                    className="label" 
                    to="about" 
                    smooth={true} 
                    duration={2000}>
                        Sobre
                </Link>
                <Link 
                    className="label" 
                    to="projects" 
                    smooth={true} 
                    duration={2000}>
                        Projetos
                </Link>
                <Link 
                    className="label" 
                    to="techs" 
                    smooth={true} 
                    duration={2000}>
                        Tecnologias
                </Link>
                <strong>
                    <Link 
                        className="label" 
                        to="contacts" 
                        smooth={true} 
                        duration={2000}
                            >Contato
                    </Link>
                </strong>
            </nav>
                }
        </header>
    )
}




