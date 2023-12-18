import { useState } from 'react'

import './MyPortfolio.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
              
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
                  <div>
                      <h2> <strong>Tecnologías que domino</strong> </h2>
                        <div id='foto-react'>
                          <img  src="./src/assets/foto-react.jpg" alt="my foto de logo de react" />
                        </div>
                        <br />
                        <div id='foto-js'>
                          <img  src="./src/assets/foto-js.jpg" alt="my foto de logo de js" />
                        </div>
                  </div>
                  <br />

                  <button style={{backgroundColor:'gray'}} > 
                  <strong>Te presento los proyectos que he realizado </strong>
                    </button>
    
    </BrowserRouter>

    
     
  )
}


export default App
