import Hyperlink from './Hyperlink'
import { Trans, useTranslation } from 'react-i18next';
import { LinkedinIcon, MailIcon } from 'lucide-react'

export default function ContactSection() {
  const {t} = useTranslation();
  return (
    <section className='flex flex-col flex-1 px-36 py-32 gap-12'>
        <div className='flex self-center flex-col gap-12 w-fit'>
            <header>
                <h1 className='text-center text-[64px] font-mono font-semibold text-p2'><Trans i18nKey={t('contact.title')}/></h1>
                <h3 className='text-center text-[32px] font-semibold text-p1'><Trans i18nKey={t('contact.subtitle')}/></h3>
            </header>
            <article className='flex flex-row justify-center gap-12'>
                <Hyperlink icon={<LinkedinIcon className="size-8 text-b1 self-center"/>}
                style='bg-bl1 text-[32px] text-b1 flex-1' href="https://www.linkedin.com/in/raimundo-segundo/" name='Linkedin'/>
                <Hyperlink icon={<MailIcon className="size-8 text-b1 self-center" />} 
                style='bg-bl1 text-[32px] text-b1 flex-1' href='mailto:raimundons19@yahoo.com' name='Email'/>
            </article>
        </div>
        
    </section>
  )
}
