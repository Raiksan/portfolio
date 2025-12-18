import './App.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import WorksSection from './components/WorksSection';
import MeetMeSection from './components/MeetMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (

    <>
      <Header navMeetMe={t(`header.nav_meet_me`)} navWorks={t(`header.nav_works`)} ctaContact={t(`header.cta_contact`)}/>
      <Herosection title={t(`hero.title`)} subtitle={t(`hero.subtitle`)} ctaContact={t(`hero.cta_contact`)} ctaViewWork={t(`hero.cta_view_work`)}/>
      <WorksSection></WorksSection>
      <MeetMeSection></MeetMeSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  )
}

export default App
