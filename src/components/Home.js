import { Link } from "react-router-dom"
function Home(){
    return(
        <>
            <div className="main">
                <div className="content">
                    <h4>GREAT PRESIDENTS OF USA</h4>
                    <div className="buttons">
                        <ul>
                            <li><Link to="/Obama" className="links">Obama</Link></li>
                            <li><Link to="/Trump" className="links">Trump</Link></li>
                            <li><Link to="/Biden" className="links">Biden</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home