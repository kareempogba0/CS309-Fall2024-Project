import React from "react";
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // User icon



function  AboutUs(){
    let message=''
    return(
<> <section className="us-container">
    <h1>About Member</h1>
    <div className="">
                <div className="small-p">
                        <p>We are students in the Faculty of Science 
                            at Cairo University, specializing in the Computer Science
                            department in the third year</p>
                </div>
                <div className="T-items">

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Ahmed</h3>
                        <h3> Ayman</h3>     
                        <p>front-end devolper</p>    
                    </div> 

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Ziad</h3>     
                        <h3> Ahmed</h3>     
                        <p>front-end devolper</p>    
                    </div> 

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Yousef</h3>     
                        <h3 className="">Hisham</h3>     
                        <p>front-end devolper</p>    
                    </div> 

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Kariem</h3>     
                        <h3>waheed</h3>     
                        <p>front-end devolper</p>    
                    </div> 


                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Kareem</h3>     
                        <h3>Abdullah</h3>     
                        <p>Back-end devolper</p>    
                    </div> 

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Ahmed</h3>     
                        <h3>Ghanem</h3>     
                        <p>Back-end devolper</p>    
                    </div> 

                    <div className="team-item">
                    <FontAwesomeIcon className="fs" icon={faUser} size="2x" />
                        <h3>Amr</h3>
                        <h3>Ahmed</h3>     
                        <p>Back-end devolper</p>    
                    </div> 
                    
                </div> 

                    
                
        </div> 

    
</section>

</>

)

} export default AboutUs;