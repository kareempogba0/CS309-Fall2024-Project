import './HomeCss.css';
import React from 'react';
import AboutUs from './AboutUsComp/AboutUs'





function Home(){
    return(
        <>
        <div className='home'>
        <div class="welcome">
            <h1 class="">Welcome to Shop</h1>
            <p class="">Discover the best deals and exclusive products just for you.</p>
        </div>
        </div>
        <div className='about'>
            {/* Here aboutUs section */}
            <AboutUs/>
            

            
        </div>
        </>
    );
}

export default Home;