import obama from '../images/pics/OBAMA.jpg'
function Obama(){
    return(
        <>
            <div className="main">
                <div className="content">
                    <img src={obama} alt='obama'/>
                    <h4>Obama</h4>
                    <p>
                    Barack Obama served as the 44th President of the United States. His story is the American story — values from the heartland, a middle-class upbringing in a strong family, hard work and education as the means of getting ahead, and the conviction that a life so blessed should be lived in service to others.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Obama