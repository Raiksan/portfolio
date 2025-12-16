import Button from './Button';
import { MailIcon, BriefcaseBusinessIcon } from "lucide-react"
import { Trans } from 'react-i18next';

interface heroProps{
    subtitle:string;
    title:string;
    ctaViewWork:string;
    ctaContact:string;
}

export default function Herosection({subtitle,title,ctaContact,ctaViewWork}:heroProps) {

  return (
    <section className='flex flex-col w-full h-fit px-36 py-64 bg-b1 gap-6'>
        <div className='flex flex-col'>
            <h3 className='text-3xl font-mono font-semibold text-p2'>
              <Trans i18nKey={subtitle}/>
            </h3>
            <h1 className='text-6xl font-mono font-bold text-p1 text-nowrap'>
              <Trans
                i18nKey={title}
                components={[
                  <br key="0" className="hidden md:block" />
                  ,<span key="1" className="text-bl1" />
                ]}
              />
            </h1>
        </div>
        <div className='flex flex-row gap-6'>
            <Button className='bg-b1 text-p1 flex-row-reverse' 
            name={ctaViewWork} icon={<BriefcaseBusinessIcon className="size-6 text-p1 self-center"></BriefcaseBusinessIcon>}>
            </Button>
            <Button className='bg-bl1 text-b1 flex-row-reverse' 
            name={ctaContact} icon={<MailIcon className="size-6 text-b1 self-center"></MailIcon>}>
            </Button>
        </div>
    </section>
  )
}
