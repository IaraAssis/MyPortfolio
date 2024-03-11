import { BannerSection } from "../../componets/sections/BannerSection"
import { ProjectSection } from "../../componets/sections/ProjectSection"
import { TechSection} from "../../componets/sections/TechSection"
import { AboutMeSection } from "../../componets/sections/AboutMeSection"
import {  ContactsSection } from "../../componets/sections/ContactsSection"
import { Header } from "../../componets/Header"



export const HomePage = () => {
    return(
        <main>
            <>
                <Header/>
                <BannerSection />
                <AboutMeSection />
                <ProjectSection />
                <TechSection  />
                <ContactsSection/> 
            </>
        </main>
    )
}
    
