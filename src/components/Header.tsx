import Anchor from "./Anchor"
import Button from "./Button"
import { MailIcon, LanguagesIcon } from "lucide-react"

interface HeaderProps{
  navWorks:string;
  navMeetMe:string;
  ctaContact:string;
}

function Header({navWorks,navMeetMe,ctaContact}:HeaderProps) {

  return (
    <header className="bg-b2 border-p1 border-b-2 flex flex-row pr-36 pl-36 pt-4 pb-4 justify-between items-center w-full h-fit">
        <h2 className="text-5xl font-bold font-mono">Raimundo</h2>
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center gap-12">
            <Anchor className='font-medium text-2xl' name={navWorks}></Anchor>
            <Anchor className='font-medium text-2xl' name={navMeetMe}></Anchor>
            <Button className="bg-bl1 text-b1 flex-row-reverse"
            name={ctaContact}
            icon={<MailIcon className="size-6 text-b1 self-center"></MailIcon>} func={()=>{}}></Button >
          </div>
          <div className="flex flex-row gap-6 items-center">
            <div className="w-0.5 h-8 bg-p1"></div>
            <LanguagesIcon></LanguagesIcon>
          </div>
        </div>
    </header>
  )
}

export default Header