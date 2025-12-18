import { Trans, useTranslation } from 'react-i18next'

function Footer() {
  const {t} = useTranslation();
  return (
    <footer className='flex flex-row w-full h-fit py-2 bg-p2 justify-center'>
        <small className='text-[16px] text-b1 w-fit'><Trans i18nKey={t('footer.copyright')}/></small>
    </footer>
  )
}

export default Footer