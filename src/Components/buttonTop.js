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
            position: "fixed",
            cursor: 'pointer',
            borderRadius: "20rem",
            border: "none",
            boxShadow: "3px 3px 20px #413280",

            width: "4rem",
            height: "4rem",
        
            bottom: "1rem",
            right: "1rem",

            transition: "0.5s ease-in-out",
            }} onClick={scrollUp}> 

            <i class="fa-solid fa-up-long" style={{
                color: "white",
                fontSize: "1.5rem",
            }}></i>

            </button>

            
        )}

        

    </div>
}

export default ButtonTop;
