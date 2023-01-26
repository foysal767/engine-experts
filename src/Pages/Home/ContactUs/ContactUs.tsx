import React from 'react';
import { FaHeadset, FaLocationArrow, FaRegEnvelopeOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className='contact'>
                <div className=" h-auto" style={{ backgroundImage: `url("assets/contact/contact.jpg")`, backgroundRepeat:`no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center`}}>

                    <div className="  ">
                        <div className="max-w-md">
                            <h1 className="texts mb-5 text-5xl font-bold text py-36 text-white pl-10">Contact</h1>
                            <div className='bread'>
                                <div className="text-lg breadcrumbs mb-0 relative">
                                    <ul className='breadcrumbss py-5 pl-5 text-white'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contactCardSection */}

            <div className='grid grid-cols-1  lg:grid-cols-3 justify-items-center gap-2 '>
                <div className="card card-compact w-96 h-3/4 shadow-xl mt-16 mb-16 border">
                    <figure><img src="assets/contact/contact1.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <div className='contact-box-content flex pt-8 pl-8 gap-5 items-center'>
                            <div className='contact-box-icon'>
                                <FaHeadset></FaHeadset>
                            </div>
                            <div className='contact-box-info'>
                                <p className='contact-box-text text-white'>Call Us 24/7</p>
                                <h5 className='font-bold text-white'>
                                    <a href="tel:+8801863901163">+8801863901163</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 h-3/4 shadow-xl mt-16 mb-16 border">
                    <figure><img src="assets/contact/contact2.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <div className='contact-box-content flex pt-8 pl-8 gap-5 items-center'>
                            <div className='contact-box-icon'>
                                <FaRegEnvelopeOpen></FaRegEnvelopeOpen>
                            </div>
                            <div className='contact-box-info text-left'>
                                <p className='contact-box-text text-white text-left'>MAke A Quote</p>
                                <h5 className='font-bold text-white'>
                                    <a href="mailto:engineexperties@gmail.com">engineexperties@gmail.com</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact w-96 h-3/4 pb-12 shadow-xl mt-16 mb-16 border">
                    <figure><img src="assets/contact/contact2.jpg" alt="Shoes" /></figure>
                    <div className="">
                        <div className='contact-box-content flex pt-8 pl-8 gap-5 items-center'>
                            <div className='contact-box-icon'>
                                <FaLocationArrow></FaLocationArrow>
                            </div>
                            <div className='contact-box-info text-left'>
                                <p className='contact-box-text text-white text-left'>Service Station</p>
                                <h5 className='font-bold text-white'>
                                    25 Green Street, BD
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* contactUsContent */}

            <div className='contact-content mt-12 mb-12 py-24'>
                <h5 className='uppercase contact-text font-bold'>Our Contact Form</h5>
                <h1 className=' text-4xl font-bold text-white pt-3'>You can connect with us  <br /> when need help! </h1>

                {/* form */}
                <div className='container my-12 py-12 px-5 text-white'>
                    <form action="">
                        <label htmlFor="FirstName"></label>
                        <input type="text" name="firstname" id="" placeholder='Your First name...' required/>
                        <label htmlFor="LastName"></label>
                        <input type="text" name="lastname" id="" placeholder='Your Last name...' required/>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="" placeholder='Your email...' required/>
                        <label htmlFor="message"></label>
                        <textarea name="message" id="" placeholder='write something....' required></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;