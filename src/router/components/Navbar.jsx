
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm d-flex justify-content-center align-items-center navbar-dark bg-dark" >

            <div className=" d-flex container-fluid">

            
            <div class="navbar-brand " > <img src="./src/assets/physiodev.jpeg" width="180" height="180"  alt="logo-physiodev" /></div>
            <div className="navbar-nav">
          

                         <NavLink 
                             className=
                             //  "nabvar-brand"  
                             {({isActive})=>`nav-item nav-link${isActive? 'active':''}`} 
                             to="/"

                             >
                             Home
                         </NavLink>

                <div className="navbar-nav">
                
                    <NavLink 
                        className=
                        // "nav-item nav-link"
                        {({isActive})=>`nav-item nav-link${isActive? 'active':''}`} 
                        to="/my-projects"
                        >
                        My Projects
                    </NavLink>      
                

                <div className="navbar-nav animate__animated animate__zoomIn animate__infinite">
                
                    <NavLink 
                          
                          to="/contact-me"
                          >
                        Contact me
                    </NavLink>
                
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    )
}