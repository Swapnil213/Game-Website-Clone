import React, { useState } from 'react'
import { useRef } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const navContainerRef = useRef(null);

    const audioElementRef = useRef(null);
    const toggleAudioIndicator = () => {
        
    }

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:insetx-6">
            <header className='absolute top-1/2 w-full -translate-y-1/2 '>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10' />
                        <Button id="product-button" title="Products" rightIcon={TiLocationArrow} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className='relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer'>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5 '>
                            <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop>
                                {[1, 2, 3, 4].map((bar) => {
                                    <div key={bar} className={`indicator-line`}>
                                    </div>
                            })}
                            </audio>
                    </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar