import React from 'react'
import '../MyPortfolio.css'
export const Myprojects = () => {
  return (
    <>
    
    <h1><strong>Let me introduce you the projects I have developed </strong></h1>
    
      <br />
      <br />
      <div style={{  alignItems: 'center',marginLeft:'80em' }} class="animate__animated animate__fadeIn" >

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginBottom:'20px' }} >
  <div >
    <h2>Journal App</h2>
    <a  href="https://journal-app-andres.netlify.app/" target='_blank' rel='noopener noreferrer' > <img   src="./src/assets/journalapp.jpg" alt="Foto de la aplicación del diario"  /> </a>
  </div>

  <div style={{ marginLeft: '60px' }}> {/* Agrega un margen entre las dos secciones */}
    <h2>Heroes Search App</h2>
    <a  href="https://heroes-profiles.netlify.app/marvel" target='_blank' rel='noopener noreferrer'><img src="./src/assets/heroesapp.jpg" alt="Foto de la aplicación de búsqueda de héroes" /> </a>
  </div>

    </div>  
                <br />
                <br />
                <br />

    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginBottom:'20px' }}>
  <div>
    <h2>Calendar App</h2>

    <a href="https://backend-calendar-app-andres-production.up.railway.app/"target='_blank' rel='noopener noreferrer'><img  src="./src/assets/calendarapp.jpg" alt="Foto de la aplicación del calendario"  /></a>
  </div>

  <div style={{ marginLeft: '60px' }}> {/* Agrega un margen entre las dos secciones */}
    <h2>gifExpertAppp</h2>

   <a href="https://gif-expert-andrescorr.netlify.app/" target='_blank' rel='noopener noreferrer'> <img src="./src/assets/gifExpertApp.jpg" alt="Foto de la aplicación de búsqueda de gifs" /></a>
  </div>

    </div>  

      </div>
          </>

    )
}
