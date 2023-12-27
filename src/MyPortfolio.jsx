
import { Link, NavLink } from 'react-router-dom';

import './MyPortfolio.css'


import { Myprojects } from './projects/Myprojects'


export const MyPortfolio = () => {
  
  const rutaProjects = () =>{
    
    console.log('hacia mis proyectos');
    
    
    
  }
  
  return (
    <>
  
                 <div id='My-Portfolio'>
              
                  <h1>My-Portfolio</h1>
                   </div>

                  <br />
                  <br />
                  <div id='foto-portafolio-developer'>
                  <img  src="./src/assets/foto-portafolio-developer.png" alt="my foto de perfil" />

                  </div>
                  <br />
                  <br />
                  <div style={{ marginBottom: '100px' }} >
                    <h2>About me</h2>
                    <p >
                      Helo ! I am a physical therapist with expertise in sports science, nutrition,
                       rehabilitation of patients with musculoskeletal diseases and occupational health
                        </p>

                        <p>
                              I'm also a junior software developer.
                        </p>

                  </div>

                  <div style={{ marginBottom: '100px' }}> 

                      <h2> <strong>Technologies I am proficient in</strong> </h2>
                  </div>

                        <div id='fotos-tech'className='col'>
                          <img  src="./src/assets/foto-react.jpg" alt="my foto de logo de react" style={{ marginRight: '100px' }} />
                    
                          <img  src="./src/assets/foto-js.jpg" alt="my foto de logo de js" />
                        
                  </div>
                  <br />

                
                <footer style={{ marginTop: '100px' }}> developed by Andrés Muricio Correa Lozano </footer>
    </>
        
        
        )
        
      }
      
      export default MyPortfolio
      