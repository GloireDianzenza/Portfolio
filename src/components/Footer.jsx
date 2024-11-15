import React from 'react';

function Footer() {

    /**
     * 
     * @param {import('react').BaseSyntheticEvent} event 
     */
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const entries = Object.fromEntries(formData.entries());
        
        async function identifyUser(data) {
            try {
                let request = await fetch("http://localhost:8080/api/users",{
                    method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
                });
                const resp = await request.json();
                if(resp.error){
                    request = await fetch("http://localhost:8080/api/users",{
                        method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
                    });
                    const result = await request.json();
                    console.log(result);
                    alert(result.message);
                    window.location.reload();
                }
                else{
                    throw Object.assign(
                        new Error("Déjà inscrit !"),
                        { code: 404 ,message:"Déjà inscrit !"}
                     );
                }
            } catch (error) {
                if(error.error){
                    alert(error.error);
                    return;
                }
                else if(error.code){
                    alert("Déjà inscrit !");
                    return;
                }
                console.error(error);
                alert(JSON.stringify(error));
            }
        }
        identifyUser(entries)
        // window.location.reload();
    }

    return (<footer className='mt-20'>
        <div className='left'>
            <p>Les utilisateurs abonnées auront droit à une réduction du prix de prestation de 20% !</p>
        </div>
        <div className='right'>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email...'  name='email' required/>
                <button type='submit'>S'inscrire</button>
            </form>
        </div>
    </footer>);
}

export default Footer;