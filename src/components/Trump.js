import trump from '../images/pics/TRUMP.jpg'
function Trump(){
    return(
        <>
            <div className="main">
                <div className="content">
                    <img src={trump} alt='Trump'/>
                    <h4>Trump</h4>
                    <p>
                    The 45th President of the United States
                    Donald John Trump was born in Queens, New York, on June 14, 1946. His father, Fred Trump was a successful real estate developer. Trump was educated at the New York Military Academy and the Wharton School of Finance and Commerce at the University of Pennsylvania
                    </p>
                </div>
            </div>
        </>
    )
}
export default Trump