import React from "react";
import  "./featured.css";
// import House1 from '../../assets/house.jpg'
// import Dining from "../../assets/dining.jpg "
// import Kitchen from "../../assets/Kitchen.jpg "
// import Room1 from "../../assets/room1.jpg "
// import Room2 from "../../assets/room2.jpg "

import Apt1 from '../../assets/apt1.jpg'
import Apt2 from '../../assets/apt2.jpg'
import Apt3 from '../../assets/apt3.jpg'


const featured = () => {

    return (
        <div className="featured">
            <h1 className="featured-text">Top Featured Listings</h1>
            <p>Selected listings by city, State,  Zip based on views.</p>
            <div className="container">
                {/* <img src={House1} alt=""/>
                <img src={Dining} alt=""/>
                <img src={Kitchen} alt=""/>
                <img src={Room1} alt=""/>
                <img src={Room2} alt=""/> */}

                <img src= {Apt1} alt=""/>
                <img src= {Apt2} alt=""/>
                <img src= {Apt3} alt=""/>

                <div className="span-3 im-details">
                    <div className="top">
                        <h2>123 Acne St. Dallas, TX</h2>
                        <p>House for sale</p>
                        <p className="price"> $2,677,000 </p>
                    </div>

                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Bedrooms:
                                </p> <p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Bathrooms:
                                </p> <p>7</p>
                            </div>

                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Square Feet:
                                </p> <p>8,138</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Est payment: 
                                </p> <p>$14,797/mo</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
           
    

}
export default featured;