
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
            
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
                
            </div>

                <div className="navbar-nav animate__animated animate__zoomIn animate__infinite">
                
                    <NavLink 
                        className="nav-item nav-link" 
                         
                        to="/contact-me"
                    >
                        Contact me
                    </NavLink>
                
                </div>
           </div>
        </nav>
    )
}