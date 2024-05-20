

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import InfoLogo from './Infologo';
import SideNavbar from './SideNavbar';

const Navigation = (props) => {
    const data = props.product;
    // console.log(data);
    const [isRotated, setIsRotated] = useState(false);
    const handleHover = () => {
        setIsRotated(!isRotated);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-4 ps-lg-5 ms-lg-5 ps-2">
                        <span className='toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span>
                        <div className="d-none d-lg-block"> {/* Hide on smaller screens */}
                            {/* <InfoLogo logosrc={data.logo.url}/> */}
                        </div>
                    </div>
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav d-flex gap-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{data.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Aboutus">{data.aboutus}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">{data.industries}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Services">{data.services}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">{data.solutions}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">{data.contactus}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CSR">{data.csr}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Careers">{data.careers}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Offcanvas start */}
            <div className="offcanvas slide offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header d-flex justify-content-between">
                    <InfoLogo logosrc={data.logo.url}/>
                    <i
                        className={`bi bi-x-circle-fill fs-3 btnClose ${isRotated ? 'rotate' : ''}`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    ></i>
                </div>
                <div className="offcanvas-body">
                    <SideNavbar data={data}/>
                </div>
            </div>
            {/* Offcanvas end */}
        </>
    );
};

export default Navigation;
