import React from 'react'
import { useForms } from '../router/components/useForm'

export const ContactMe = () => {
    

  return (
    <div class='container contact-container'>
        <div class= 'container text-center  d-flex justifiy-content-evenly'>
          <div class='row'>
            <div class='col-12 col-md-6 col-lg-4'>
                Let's talk !!!
            </div>
            <div class='col-sm-12 col-md-6 col-lg-4 description'>
                Contact me for helping you to develop your web proyect, and I'll make your idea become real
            </div>
            <div class='col-12 col-md-6 col-lg-4'>

              <a href="mailto:saludenmovimientoandres@gmail.com" target='_blank' rel='noopener noreferrer'>
                <button type='button' class='btn btn-primary '>
                  mail
                   <i class="bi bi-envelope-at-fill"></i>
                </button>
              </a>
                
            </div>

           </div>

          </div>

<br />
<br />
<br />
          <div class='container contact-container'>
        <div class= 'container text-center  d-flex justifiy-content-evenly'>
          <div class="row" >
              <div class='col-4 col-md-4 col-lg-4'>
              <a href="https://www.instagram.com/salud_n_movimiento?utm_source=qr&igsh=MThlbDVubHE0MjI3bg==" target='_blank' rel='noopener noreferrer'>
              <button type='button' class='btn btn-primary '>
                  <i class="bi bi-instagram"></i>
                  </button>  
              </a>
              </div>
              <div class='col-4 col-md-4 col-lg-4'>

              <a href="https://www.facebook.com/sssaludenmovimiento" target='_blank' rel='noopener noreferrer'>
              <button type='button' class='btn btn-primary '>
              <i class="bi bi-facebook"></i>
                  </button>  
              </a>
                
              </div>

              <div class='col-4 col-md-4 col-lg-4'>

                <a href="https://www.linkedin.com/in/andres-correa-618357189/" target='_blank' rel='noopener noreferrer'>
                <button type='button' class='btn btn-primary '>
                <i class="bi bi-linkedin"></i>
                    </button>  
                </a>

                </div>
                  </div>
                  </div>
              </div>
        </div>

   
  )
}

