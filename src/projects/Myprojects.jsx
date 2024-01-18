import React from 'react'
import '../MyPortfolio.css'
export const Myprojects = () => {
  return (
    <>
    
    <br />
    <br />

    <h1><strong>Let me introduce you the projects I have developed </strong></h1>
    
      <br />
      <br />
      {/* <div style={{  alignItems: 'center',marginLeft:'80em' }} class="animate__animated animate__fadeIn" > </div> 

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',marginBottom:'20px' }} > </div>  */}
    <div class="container text-center"> 

     <div class="row mb-5"> 
            <div class="project-img col-12 col-md-6 col-lg-6" >


            <h2>Journal App</h2>
            <a  href="https://journal-app-andres.netlify.app/" target='_blank' rel='noopener noreferrer' > <img  src="./src/assets/journalapp.jpg" alt="Foto de la aplicación del diario" class="animated fadeIn"   /> </a>

            </div>

            <div class="project-img col-sm-12  col-md 6 col-lg-6" >
              <h2>Heroes Search App</h2>
              <a  href="https://heroes-profiles.netlify.app/marvel" target='_blank' rel='noopener noreferrer'><img src="./src/assets/heroesapp.jpg" alt="Foto de la aplicación de búsqueda de héroes" class="ml-5 animated fadeIn" /> </a>

            </div>

      </div>

      <div class="row mb-4">   

               <div class="project-img col-sm-12  col-md 6 col-lg-6">
               <h2>Calendar App</h2>

               <a href="https://backend-calendar-app-andres-production.up.railway.app/"target='_blank' rel='noopener noreferrer'><img  src="./src/assets/calendarapp.jpg" alt="Foto de la aplicación del calendario" class="animated fadeIn"  /></a>

               </div>

                     <div class="project-img col-sm-12  col-md 6 col-lg-6"> 
                     <h2>gifExpertAppp</h2>

                    <a href="https://gif-expert-andrescorr.netlify.app/" target='_blank' rel='noopener noreferrer'> <img src="./src/assets/gifExpertApp.jpg" alt="Foto de la aplicación de búsqueda de gifs" class="ml-5 animated fadeIn"/></a>
                     </div>

        </div>


    </div>
    
          </>

    )
}
