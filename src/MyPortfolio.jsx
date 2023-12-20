

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
                  
                      <h2> <strong>Tecnologías que domino</strong> </h2>
                        <div id='fotos-tech'className='col'>
                          <img  src="./src/assets/foto-react.jpg" alt="my foto de logo de react" style={{ marginRight: '100px' }} />
                    
                          <img  src="./src/assets/foto-js.jpg" alt="my foto de logo de js" />
                        
                  </div>
                  <br />

                  <button style={{backgroundColor:'gray'}} 
                  onClick={rutaProjects}
                  > 
                 <strong>Te presento los proyectos que he realizado </strong>
                    </button>

                    
                       
           
    </>
        
        
  )
}

export default MyPortfolio
