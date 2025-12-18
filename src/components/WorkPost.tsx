import { Trans, useTranslation } from 'react-i18next';
import { ExternalLinkIcon } from 'lucide-react';
import Hyperlink from './Hyperlink';
import placeholder from '/placeholder.webp' 

interface postProps{
    title:string;
    role_date:string;
    description:string;
    cta_link: string; 
}

export default function WorkPost({title,role_date,description,cta_link}:postProps) {
    const {t} = useTranslation();
  return (
    <article className='flex flex-row'>
        <figure className='border-2 border-p2 rounded-l-sm'>
            <img className='w-fit h-fit rounded-l-sm' src={placeholder}></img>
        </figure>
        <div className='bg-b1 border-2 border-p2 px-8 py-6 rounded-r-sm justify-evenly h-fit w-fit'>
            <h3 className='text-3xl font-mono font-semibold text-p2'><Trans i18nKey={title}/></h3>
            <h4 className='font-medium text-2xl text-p2'><Trans i18nKey={role_date}/></h4>
            <p><Trans i18nKey={description}/></p>
            <Hyperlink icon={<ExternalLinkIcon className="size-6 text-b1 self-center"/>} style='bg-bl1 text-b1 flex-row-reverse flex-1' href={cta_link} name={t(`works.hyperlink_name`)}></Hyperlink>
        </div>
    </article>
  )
}
