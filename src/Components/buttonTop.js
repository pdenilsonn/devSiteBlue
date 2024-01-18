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
            backgroundColor: "#ffff",
            position: "fixed",
            cursor: 'pointer',
            zIndex: 1000,
            borderRadius: "20rem",
            border: "none",
            boxShadow: "1px 1px 8px #5AA0F2",

            width: "4rem",
            height: "4rem",
        
            bottom: "1rem",
            right: "1rem",

            transition: " 3s ease-in-out",
            }} onClick={scrollUp}> 

            <i class="fa-solid fa-up-long" style={{
                color: "#5AA0F2",
                fontSize: "1.5rem",
            }}></i>

            </button>

            
        )}

        

    </div>
}

export default ButtonTop;
