
import { Link, NavLink } from 'react-router-dom';


import './MyPortfolio.css'

import { Myprojects } from './projects/Myprojects'
import SvgComponent from './router/components/WaveBackground';


export const MyPortfolio = () => {
  
 
  
  return (
    <>
                  <br />
                  <br />
                 <div id='My-Portfolio'>
              
                  <h1>My-Portfolio</h1>
                  <br />
                    <h1>Andrés Mauricio Correa Lozano</h1>
                   </div>

                  <br />
                  <br />
                  <div id='foto-portafolio-developer' class="animate__animated animate__fadeIn ">
                  <img  src="./src/assets/foto-portafolio-developer.png" alt="my foto de perfil" class="img-andres"/>

                  </div>
                  <br />
                  <br />
                  <div style={{ marginBottom: '100px' }} >
                    <h1>About me</h1>
                    <br />
                    <p>Hello !!!</p>
                    <p > I am a physical therapist with expertise in sports science, nutrition, </p>
                        <p> rehabilitation of patients with musculoskeletal diseases and occupational health</p>
                        <p>
                              I'm also a junior software developer. </p>

                  </div>

                  <div style={{ marginBottom: '100px' }} class="animate__animated animate__bounce e"> 

                      <h2> <strong>Technologies I am proficient in</strong> </h2>
                  </div>

                        <div id='fotos-tech'className='col' class="animate__animated animate__zoomIn" >
                          <img  src="./src/assets/foto-react.jpg" alt="my foto de logo de react" style={{ marginRight: '100px', width:'450px',height:'200px'}} class="img-technologies" />
                    
                          <img  src="./src/assets/foto-html-js-css.jpg" alt="my foto de logo de js-css-html" class="img-technologies"/>
                        
                  </div>
                  <br />

                
                <footer style={{ marginTop: '100px' }}> 

                <div class="row align-items-center justify-content-center" >

                <img src="./src/assets/physiodev.jpeg" width="80" height="80"  alt="logo-physiodev" />
                </div>
                <br />
                developed by Andrés Mauricio Correa Lozano(2024)&#169;
                 </footer>

                
                
    </>
        
        )
        
      }
      
      export default MyPortfolio
      