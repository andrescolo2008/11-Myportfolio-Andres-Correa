
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style ={{marginBottom: '50px'}}>
            
            <Link 
                className=
                // "nabvar-brand"  
                {({isActive})=>`navbar-brand${isActive? 'active':''}`} 
                to="/"
                style={{ marginLeft: '40%' }}
            >
                Home
            </Link>

            <div className="navbar-collapse w-100 order-3 dual-collapse2 " style={{ marginLeft: '10%' }}>
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
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div> */}
        </nav>
    )
}