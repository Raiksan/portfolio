import './App.css'
import Header from './components/Header'
import Herosection from './components/Herosection'
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (

    <>
      <Header navMeetMe={t(`header.nav_meet_me`)} navWorks={t(`header.nav_works`)} ctaContact={t(`header.cta_contact`)}/>
      <Herosection title={t(`hero.title`)} subtitle={t(`hero.subtitle`)} ctaContact={t(`hero.cta_contact`)} ctaViewWork={t(`hero.cta_view_work`)}/>
    </>
  )
}

export default App
