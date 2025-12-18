import { Trans, useTranslation } from 'react-i18next'
import placeholder from '/placeholder.webp';

function MeetMeSection() {
  const {t} = useTranslation();
  return (
    <section className='bg-p2 px-36 py-24 flex flex-row gap-24'>
        <article className='flex flex-col gap-4 flex-1 w-1/2 justify-center'>
            <div className='flex-col gap-2 '>
                <h1 className='text-[64px] font-mono font-semibold text-b1'><Trans i18nKey={t('meet_me.title')}/></h1>
                <h3 className='text-[32px] font-semibold text-b1'><Trans i18nKey={t('meet_me.subtitle')}/></h3>
            </div>
            <p className='text-xl font-medium text-b1'><Trans i18nKey={t('meet_me.bio')}/></p>
        </article>
        <figure className='w-1/2'>
            <img className='border-bl1 border-4' src={placeholder} alt="placeholder" />
        </figure>
    </section>
  )
}

export default MeetMeSection