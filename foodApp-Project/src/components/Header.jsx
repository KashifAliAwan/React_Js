// import React from "react";
import Image from '../assets/Logo.png';
import LocationImage from '../assets/location.png'

function Header() {
    return (
        <>
            <div style={{width:'1920px',height:'60px'}}>
                <img src={Image} alt="Logo" style={{ width: '197px' }} />

                {/* Center One */}
                <div>
                    <h6>
                        <b>Diliver to:</b>
                        <img src={LocationImage} alt="LocationIcon" />
                    </h6>
                </div>
            </div>


        </>
    )
}
export default Header