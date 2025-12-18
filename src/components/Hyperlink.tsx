import type { ReactNode } from "react";

interface hlProps{
    href:string;
    name:string;
    style:string;
    icon:ReactNode;
}

export default function Hyperlink({href,name,style,icon}:hlProps) {
  return (
    <a className={`px-4 py-2 font-medium rounded-sm ring-p2 ring-2 ring-inset text-xl flex h-fit gap-2 justify-center ${style}`} 
    href={href}>
    {icon}{name}
    </a>
  )
}
