import WorkPost from './WorkPost'
import { useTranslation, Trans } from 'react-i18next';

interface ProjectData {
  title: string;
  role_date: string;
  description: string;
  cta_link: string; // Adicionei um link se precisar
}

function WorksSection() {  

  const {t} = useTranslation();
  const projects = t('works.list', { returnObjects: true }) as ProjectData[];

  return (
    <section className='flex flex-col w-full h-fit px-36 py-16 bg-b2 gap-8'>
        <header>
          <h1 className='text-6xl font-mono font-bold text-p2 text-nowrap'>{t(`works.section_title`)}</h1>
          <h3 className='text-3xl font-mono font-semibold text-p1'><Trans i18nKey={`works.section_subtitle`} components={[<span key="1" className="text-bl1" />]}></Trans></h3>
        </header>
        <div className='flex gap-6'>
          {projects.map((project, index) => (
            <WorkPost 
              key={index}
              title={project.title}
              role_date={project.role_date}
              description={project.description}
              cta_link={project.cta_link}
            />
          ))}
        </div>
    </section>
  )
}

export default WorksSection