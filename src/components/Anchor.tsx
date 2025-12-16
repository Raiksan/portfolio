interface anchorProps{
    name:string;
    func?:()=>void;
    className?:string;
}

function anchor({name,className}:anchorProps) {
    
  return (
    <div>
        <h1 className={className}>{name}</h1>
        <div className='bg-bl2 flex'></div>
    </div>
  )
}

export default anchor