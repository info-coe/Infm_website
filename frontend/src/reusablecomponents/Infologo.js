import React from 'react';
import { Link} from "react-router-dom";

const InfoLogo = (props) => {
    return (
        <>
             <Link to="/">
                <img 
                src={props.logosrc}
                height="50px"  
                alt='Logo' 
                className='infmlogo'
                style={{backgroundColor:"white"}}
                >
                </img>
             </Link>
        </>
    );
};

export default InfoLogo;