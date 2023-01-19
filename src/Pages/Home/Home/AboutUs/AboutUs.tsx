import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <div className='about'>
                <div className=" h-auto" style={{ backgroundImage: `url("assets/contact/contact.jpg")`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center` }}>

                    <div className="  ">
                        <div className="max-w-md">
                            <h1 className="texts mb-5 text-5xl font-bold text py-36 text-white pl-10">About</h1>
                            <div className='bread'>
                                <div className="text-lg breadcrumbs mb-0 relative">
                                    <ul className='breadcrumbss py-5 pl-5 text-white'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li>About</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* repairSection */}

            <div className="hero   mt-28 mb-28">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='text-left left-content'>
                        <h1 className="text-5xl font-bold font-poppins">WE MAKE AUTO REPAIR <br /> MORE CONVENIENT</h1>
                        <p className="py-6 text-lg font-poppins">Promotors has over 1200 locations across the U.S. and <br /> Canada to provide car maintenance and car repair  services wherever you are.</p>
                       
                    </div>
                    <div>
                        <img src="assets/about/about-1.jpg" alt='' className=" rounded-lg shadow-2xl hover:cursor-zoom-in" />
                    </div>

                </div>
            </div>


            {/* serviceSection */}

            
        </div>
    );
};

export default AboutUs;