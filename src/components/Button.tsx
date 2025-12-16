import type { ReactNode } from "react";
import { Trans } from 'react-i18next';

interface buttonProps{
    func?:()=>void,
    name:string;
    className?:string;
    icon?:ReactNode;
}
export default function Button({func,name,className,icon}:buttonProps) {

  return (
    <button className={`px-4 py-2 font-medium rounded-sm ring-p2 ring-2 ring-inset text-xl flex w-fit h-fit gap-2 ${className}`}
     onClick={func}>{icon}
     <span className="w-fit h-fit"><Trans i18nKey={name}/></span></button>
  )
}
