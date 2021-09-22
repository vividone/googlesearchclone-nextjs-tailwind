import React from 'react'

export default function Avatar({url, className}) {
    return (
        <img 

            loading="lazy" 
            src={url} alt="Profile Photo" 
            className={`h-10 cursor-pointer transition duration-150 transform hover:scale-110  rounded-full ${className}`}
        />
            
    )
}
