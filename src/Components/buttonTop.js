import React from 'react';
import { useEffect, useState } from 'react';

function ButtonTop() {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, []) 

    const scrollUp = () => [
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    ]


    return <div className='App'>

        {backToTopButton && (
            <button style={{
            backgroundColor: "#4F6EDD",
            width: "4rem",
            height: "4rem",
            borderRadius: "20rem",
            border: "none",
        
            position: "fixed",
            bottom: "1rem",
            right: "1rem",

            cursor: 'pointer',
            transition: "ease-in-out",
            }} onClick={scrollUp}> 

            <img src="#"/>

            </button>

            
        )}

        

    </div>
}

export default ButtonTop;
