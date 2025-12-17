interface hlProps{
    href:string;
    name:string;
    style:string;
}

export default function Hyperlink({href,name,style}:hlProps) {
  return (
    <a className={`px-4 py-2 font-medium rounded-sm ring-p2 ring-2 ring-inset text-xl flex w-fit h-fit gap-2 ${style}`} 
    href={href}>{name}</a>
  )
}
