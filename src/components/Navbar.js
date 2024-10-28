import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Obama'>Obama</Link></li>
                <li><Link to='/Biden'>Biden</Link></li>
                <li><Link to='/Trump'>Trump</Link></li>
            </ul>
        </>
    )
}
export default Navbar;