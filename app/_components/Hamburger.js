'use client'

import React from "react";
import { useState } from 'react';

export default function Hamburger(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleClick}
                className="flex flex-col justify-center items-center">
                <span className={`bg-bg2 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1 bg-bg2': '-translate-y-0.5 bg-cont'
                    }`} >
                </span>
                <span className={`bg-bg2 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                        'opacity-0 bg-bg2' : 'bg-cont opacity-100'
                    }`} >
                </span>
                <span className={`bg-bg2 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1 bg-highlight' : 'bg-cont translate-y-0.5'
                    }`} >
                </span>

            </button>
        </div >
    );
}