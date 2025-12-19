import {useEffect, useRef, useState} from 'react'
import { createPortal } from 'react-dom';
import { LanguagesIcon } from "lucide-react"
import { useTranslation } from 'react-i18next';

interface ModalProps{
    open:boolean;
    onClose:()=>void;
    position: { top: number; left: number };
}

export default function LanguageSwitcher() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({
                top: rect.bottom + window.scrollY + 8,
                left: rect.left + window.scrollX 
            });
            setIsModalOpen(true);
        }
    };

  return (
    <>
        <button ref={buttonRef} onClick={handleOpen}>
            <LanguagesIcon onClick={()=>setIsModalOpen(true)}></LanguagesIcon>
        </button>
        <Modal open={isModalOpen} onClose={()=>setIsModalOpen(false)} position={coords}></Modal>
    </>
  )
}

export function Modal({open,onClose,position}:ModalProps){

    const { i18n } = useTranslation();

    useEffect(()=>{
        const handleEsc = (event:KeyboardEvent) => {
            if (event.key==='Escape') onClose();
        }
        window.addEventListener('keydown',handleEsc);
        return () => window.removeEventListener('keydown',handleEsc);
    },[onClose])

    if (!open) return null;
    
    return createPortal(
        <>
            <div className='fixed flex items-center justify-center z-50 inset-0 animate-fade-in' onClick={onClose}></div>
            <div className='fixed z-50 border-2 border-p1 px-4 py-2 bg-b2 animate-fade-in shadow-lg rounded-lg' 
            onClick={(e) => e.stopPropagation()}
            style={{ top: position.top,left: position.left }}>
                <div className='flex flex-row gap-4 items-center'>
                    <small className='font-bold text-[16px] text-p1' onClick={()=>i18n.changeLanguage('pt')}>PT</small>
                    <div className='h-4 w-0.5 bg-p2'></div>
                    <small className='font-bold text-[16px] text-p1' onClick={()=>i18n.changeLanguage('en')}>EN</small>
                </div>
                <div className='bg-bl2 w-4 h-0.5'/>
            </div>
        </>,
        document.body
    );
}