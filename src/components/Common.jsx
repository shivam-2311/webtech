import React from 'react'
import { NavLink } from "react-router-dom";
// import Web from '../images/comp.png';


function Common(props) {
    return (
        <section className='d-flex align-items-center' id='header'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>
                                Grow your buisness with <span className='brand_name'>WebTech Limited</span>
                            </h1>
                            <h2 className='my-2'>
                            {props.name}

                            </h2>
                            <div className='mt-3'>
                                <NavLink className='btn-get-started' to={props.visit}>{props.btnname}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={props.imgsrc} className='img-fluid animated'alt='home img'/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common
