import React, { useEffect } from 'react';

function Header() {

    /**
     * 
     * @param {HTMLAnchorElement} link 
     */
    function setActive(link){
        for(const a of document.querySelectorAll("header a")){
            a.classList.remove("active");
        }
        link.classList.add("active");
    }

    useEffect(()=>{
        document.querySelector("header a.active").click();
    },[])

    return (<header className='flex justify-around items-center text-neutral-900'>
        <a href="#home" className='active' onClick={(e)=>setActive(e.target)}>Accueil</a>
        <a href="#about" onClick={(e)=>setActive(e.target)}>Au sujet de moi</a>
        <a href="#services" onClick={(e)=>setActive(e.target)}>Services</a>
        <a href="#works" onClick={(e)=>setActive(e.target)}>Projets</a>
        <a href="#contact" onClick={(e)=>setActive(e.target)}>Contact</a>
    </header>);
}

export default Header;