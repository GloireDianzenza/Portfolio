import React from 'react';

function Footer() {

    /**
     * 
     * @param {import('react').BaseSyntheticEvent} event 
     */
    function handleSubmit(event){
        event.preventDefault();
        window.location.reload();
    }

    return (<footer className='mt-20'>
        <div className='left'>
            <p>Les utilisateurs abonnées auront droit à une réduction du prix de prestation de 20% !</p>
        </div>
        <div className='right'>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email...'  name='email'/>
                <button type='submit'>S'inscrire</button>
            </form>
        </div>
    </footer>);
}

export default Footer;